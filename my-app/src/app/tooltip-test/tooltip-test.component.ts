import { Component } from '@angular/core';

interface NavItem {
  icon: string;
  tooltip: string;
  link: string;
}

interface TooltipPosition {
  top: number;
  left: number;
}

@Component({
  selector: 'app-tooltip-test',
  templateUrl: './tooltip-test.component.html',
  styleUrls: ['./tooltip-test.component.scss']
})
export class TooltipTestComponent {
  // Track hovered item
  hoverIndex: number | null = null;

  // Track tooltip position
  tooltipPosition: TooltipPosition = { top: 0, left: 0 };

  navItems: NavItem[] = [
    {
      icon: 'cottage',
      tooltip: 'Home',
      link: '#'
    },
    {
      icon: 'settings',
      tooltip: 'Settings',
      link: '#'
    },
    {
      icon: 'person',
      tooltip: 'Profile',
      link: '#'
    },
    {
      icon: 'notifications',
      tooltip: 'Notifications',
      link: '#'
    },
    {
      icon: 'mail',
      tooltip: 'Messages',
      link: '#'
    },
    {
      icon: 'dashboard',
      tooltip: 'Dashboard',
      link: '#'
    },
    {
      icon: 'bookmark',
      tooltip: 'Bookmarks',
      link: '#'
    },
    {
      icon: 'help',
      tooltip: 'Help & Support',
      link: '#'
    }
  ];

  // Method to show tooltip and calculate its position
  showTooltip(index: number, event: Event): void {
    this.hoverIndex = index;

    // Calculate position based on the target element
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    // Position tooltip to the right of the icon
    this.tooltipPosition = {
      top: rect.top + (rect.height / 2) - 10, // Center vertically with small offset
      left: rect.right + 5 // 10px to the right of the icon
    };
  }

  // Method to hide tooltip
  hideTooltip(): void {
    this.hoverIndex = null;
  }
}
