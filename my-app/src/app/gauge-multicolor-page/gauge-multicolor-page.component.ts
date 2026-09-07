import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gauge-multicolor-page',
  templateUrl: './gauge-multicolor-page.component.html',
})
export class GaugeMulticolorPageComponent {
  readonly chartUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.chartUrl = sanitizer.bypassSecurityTrustResourceUrl('assets/charts/gauge-multicolor.html');
  }
}
