import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  activeTab: 'alerts' | 'configuration' = 'alerts';

  /** Toggles the "2 New Matches" panel under the first alert row. */
  showAlertNewMatches = false;

  setActiveTab(tab: 'alerts' | 'configuration'): void {
    this.activeTab = tab;
  }

  toggleAlertNewMatches(): void {
    this.showAlertNewMatches = !this.showAlertNewMatches;
  }
}
