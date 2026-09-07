import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-echarts-page',
  templateUrl: './echarts-page.component.html',
})
export class EchartsPageComponent {
  readonly chartUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.chartUrl = sanitizer.bypassSecurityTrustResourceUrl('assets/charts/echarts.html');
  }
}
