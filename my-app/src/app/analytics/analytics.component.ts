import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnalyticsComponent {
  activeTab: string = 'second';

  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
