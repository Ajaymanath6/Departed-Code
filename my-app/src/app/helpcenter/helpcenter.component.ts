import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type HelpCenterTab =
  | 'announcements'
  | 'home-page'
  | 'navigation'
  | 'search'
  | 'casepage'
  | 'entity-pages'
  | 'tracking-page'
  | 'pins-page'
  | 'analytics-page'
  | 'workspace-page'
  | 'account-page';

@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
})
export class HelpcenterComponent implements OnInit, OnDestroy {
  /** Opens Help Center when the host route/view loads */
  helpCenterOpen = true;
  activeTab: HelpCenterTab = 'announcements';

  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit(): void {
    if (this.helpCenterOpen) {
      this.setBodyScrollLocked(true);
    }
  }

  ngOnDestroy(): void {
    this.setBodyScrollLocked(false);
  }

  openHelpCenter(): void {
    this.helpCenterOpen = true;
    this.setBodyScrollLocked(true);
  }

  closeHelpCenter(): void {
    this.helpCenterOpen = false;
    this.setBodyScrollLocked(false);
  }

  selectTab(tab: HelpCenterTab, event?: Event): void {
    event?.preventDefault();
    this.activeTab = tab;
  }

  isActive(tab: HelpCenterTab): boolean {
    return this.activeTab === tab;
  }

  private setBodyScrollLocked(locked: boolean): void {
    const body = this.document.body;
    if (locked) {
      this.renderer.setStyle(body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(body, 'overflow');
    }
  }
}
