import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  activeTab: 'alerts' | 'configuration' = 'alerts';

  /** Tracks which configuration alert row is currently expanded. */
  activeAlertNewMatchesPanel: number | null = null;

  setActiveTab(tab: 'alerts' | 'configuration'): void {
    this.activeTab = tab;
  }

  toggleAlertNewMatches(panelIndex: number): void {
    this.activeAlertNewMatchesPanel =
      this.activeAlertNewMatchesPanel === panelIndex ? null : panelIndex;
  }

  isAlertNewMatchesOpen(panelIndex: number): boolean {
    return this.activeAlertNewMatchesPanel === panelIndex;
  }
}
