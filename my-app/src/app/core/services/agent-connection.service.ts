import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { AgentConfigService } from './agent-config.service';

export type AgentConnectionStatus = 'pending' | 'connected' | 'failed' | 'not_configured';

/** Message shown when connection to the A2UI agent fails. */
export const AGENT_CONNECTION_FAILED_MESSAGE =
  'Failed to connect to A2UI Agent. Is it running?';

/** Delay before first ping so agent/proxy can be ready (ms). */
const INITIAL_DELAY_MS = 1500;
/** Delay between retries (ms). */
const RETRY_DELAY_MS = 2000;
/** Max number of ping attempts (first + retries). */
const MAX_ATTEMPTS = 3;

/**
 * Pings the dev agent at app startup and exposes connection status.
 * Uses AgentConfigService (proxy /api-agent in dev, or http://localhost:4302).
 */
@Injectable({
  providedIn: 'root',
})
export class AgentConnectionService {
  private readonly status$ = new BehaviorSubject<AgentConnectionStatus>('pending');
  private checked = false;

  /** Observable of connection status for template async pipe. */
  readonly status = this.status$.asObservable();

  constructor(
    private readonly agentConfig: AgentConfigService,
    private readonly http: HttpClient
  ) {}

  /** Run the connection check (idempotent). Call from APP_INITIALIZER or on first use. */
  async checkConnection(): Promise<void> {
    if (this.checked) return;
    this.checked = true;

    if (!this.agentConfig.isConfigured) {
      this.status$.next('not_configured');
      return;
    }

    const url = this.agentConfig.getUserSettingsUrl();
    if (typeof console !== 'undefined' && console.log) {
      console.log('[AgentConnection] checking:', url, '(ensure agent is running on 4302 and ng serve uses proxy)');
    }
    const connected = await this.pingAgent(url);
    if (connected) {
      this.status$.next('connected');
      if (typeof console !== 'undefined' && console.log) {
        console.log('[AgentConnection] connected');
      }
    } else {
      this.status$.next('failed');
    }
  }

  /**
   * Ping the agent URL. Accepts any 2xx. Retries up to MAX_ATTEMPTS with delay between.
   */
  private async pingAgent(url: string): Promise<boolean> {
    const tryOnce = async (attempt: number): Promise<boolean> => {
      try {
        const res = await firstValueFrom(
          this.http.get(url, { observe: 'response', responseType: 'text' })
        );
        const ok = res.ok && res.status >= 200 && res.status < 300;
        if (!ok && typeof console !== 'undefined' && console.warn) {
          console.warn('[AgentConnection] attempt', attempt, 'status', res.status, res.statusText);
        }
        return ok;
      } catch (err: unknown) {
        const msg = err && typeof err === 'object' && 'message' in err ? (err as Error).message : String(err);
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[AgentConnection] attempt', attempt, 'failed:', msg);
        }
        return false;
      }
    };

    await new Promise((r) => setTimeout(r, INITIAL_DELAY_MS));
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      if (await tryOnce(attempt)) return true;
      if (attempt < MAX_ATTEMPTS) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
      }
    }
    return false;
  }

  getStatus(): AgentConnectionStatus {
    return this.status$.value;
  }

  get failedMessage(): string {
    return AGENT_CONNECTION_FAILED_MESSAGE;
  }

  /** Retry the connection check (e.g. after user starts the agent). */
  async retry(): Promise<void> {
    this.checked = false;
    this.status$.next('pending');
    await this.checkConnection();
  }
}
