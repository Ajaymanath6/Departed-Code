import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  /** Toggles the "2 New Matches" panel under the first alert row. */
  showAlertNewMatches = false;

  toggleAlertNewMatches(): void {
    this.showAlertNewMatches = !this.showAlertNewMatches;
  }
}
