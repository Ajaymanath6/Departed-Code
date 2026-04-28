import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  /** Toggles the "2 New Matches" panel under the first alert row. */
  showAlertNewMatches = false;

  /** Toggles the document order detail table under the document order row expander. */
  showDocumentOrderDetails = false;

  toggleAlertNewMatches(): void {
    this.showAlertNewMatches = !this.showAlertNewMatches;
  }

  toggleDocumentOrderDetails(): void {
    this.showDocumentOrderDetails = !this.showDocumentOrderDetails;
  }
}
