import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-echarts-map-page',
  templateUrl: './echarts-map-page.component.html',
})
export class EchartsMapPageComponent {
  readonly chartUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.chartUrl = sanitizer.bypassSecurityTrustResourceUrl('assets/charts/echarts-map.html');
  }
}
