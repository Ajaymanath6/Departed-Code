import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

/** Base path for agent UI API (e.g. /api/ui/user-settings). */
const AGENT_UI_API_PATH = '/api/ui';

/**
 * Provides dev agent base URL and API paths for flowbite-learning/my-app.
 * Agent must be running at agentBaseUrl (e.g. npm run dev:agent → http://localhost:4302).
 */
@Injectable({
  providedIn: 'root',
})
export class AgentConfigService {
  /** Base URL for the dev agent (no trailing slash). */
  get agentBaseUrl(): string {
    return environment.agentBaseUrl;
  }

  /** Full URL for agent UI API path (e.g. http://localhost:4302/api/ui/user-settings). */
  getAgentApiUrl(path: string): string {
    const base = this.agentBaseUrl.replace(/\/$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${normalizedPath}`;
  }

  /** Convenience: URL for GET /api/ui/user-settings. */
  getUserSettingsUrl(): string {
    return this.getAgentApiUrl(`${AGENT_UI_API_PATH}/user-settings`);
  }

  /** True if agent is configured (non-empty base URL). */
  get isConfigured(): boolean {
    return !!this.agentBaseUrl?.trim();
  }
}
