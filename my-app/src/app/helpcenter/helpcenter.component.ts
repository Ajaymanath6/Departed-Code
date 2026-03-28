import { Component } from '@angular/core';

@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
  styleUrls: ['./helpcenter.component.scss']
})
export class HelpcenterComponent {
  helpCenterOpen = true;

  openHelpCenter(): void {
    this.helpCenterOpen = true;
  }

  closeHelpCenter(): void {
    this.helpCenterOpen = false;
  }
}
