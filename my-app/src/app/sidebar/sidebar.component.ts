import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ]),
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SidebarComponent {
  @HostBinding('class') hostClass = 'block h-screen';

  @ViewChild('sidebarPanel') sidebarPanel?: ElementRef<HTMLElement>;
  @ViewChild('moreTrigger') moreTrigger?: ElementRef<HTMLElement>;
  @ViewChild('moreMenuPanel') moreMenuPanel?: ElementRef<HTMLElement>;

  sidebarCollapsed = false;
  projectDropdownOpen = false;
  moreMenuOpen = false;
  /** Selected nav key — mirrors Artemis routerLinkActive / isActive */
  activeNav = 'home';
  moreMenuTop = 0;

  private readonly moreNavKeys = ['all-pins', 'all-tracking', 'all-alerts'];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.moreMenuOpen) {
      return;
    }
    const target = event.target as Node | null;
    if (!target) {
      return;
    }
    const onTrigger = this.moreTrigger?.nativeElement.contains(target);
    const onMenu = this.moreMenuPanel?.nativeElement.contains(target);
    if (onTrigger || onMenu) {
      return;
    }
    this.closeMoreMenu();
  }

  isNavActive(key: string): boolean {
    return this.activeNav === key;
  }

  /** Parent More is green only when a submenu page is selected */
  isMoreChildActive(): boolean {
    return this.moreNavKeys.includes(this.activeNav);
  }

  setActiveNav(key: string): void {
    this.activeNav = key;
    if (!this.isMoreChildActive()) {
      this.moreMenuOpen = false;
    }
  }

  toggleProjectDropdown(): void {
    this.projectDropdownOpen = !this.projectDropdownOpen;
    if (this.projectDropdownOpen) {
      this.moreMenuOpen = false;
    }
  }

  /** Artemis inline drawer: sit flush against measured sidebar right edge */
  projectDrawerLeftPx(): number {
    const el = this.sidebarPanel?.nativeElement;
    if (el) {
      return Math.round(el.getBoundingClientRect().right);
    }
    return this.sidebarCollapsed ? 80 : 240;
  }

  closeProjectDropdown(): void {
    this.projectDropdownOpen = false;
  }

  toggleMoreMenu(): void {
    this.moreMenuOpen = !this.moreMenuOpen;
    if (this.moreMenuOpen) {
      this.projectDropdownOpen = false;
      // Remeasure after open so ViewChild + layout are current
      requestAnimationFrame(() => this.positionMoreMenu());
    }
  }

  private positionMoreMenu(): void {
    const triggerEl = this.moreTrigger?.nativeElement;
    if (!triggerEl) {
      return;
    }
    const triggerRect = triggerEl.getBoundingClientRect();
    // Align menu vertically to the More trigger; left is set in the template via rem
    this.moreMenuTop = Math.round(triggerRect.top + triggerRect.height / 2);
  }

  closeMoreMenu(): void {
    this.moreMenuOpen = false;
  }

  selectMoreItem(key: string): void {
    this.activeNav = key;
    this.moreMenuOpen = true;
    this.projectDropdownOpen = false;
    requestAnimationFrame(() => this.positionMoreMenu());
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    if (this.sidebarCollapsed) {
      this.moreMenuOpen = false;
      this.projectDropdownOpen = false;
    } else if (this.moreMenuOpen) {
      requestAnimationFrame(() => this.positionMoreMenu());
    }
  }
}
