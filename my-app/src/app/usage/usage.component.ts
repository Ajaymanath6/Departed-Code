import { Component } from '@angular/core';

interface UsageActivity {
  name: string;
  used: number;
  limit: number;
  overage: number;
  barPercent: number;
}

interface UsageSection {
  title: string;
  activities: UsageActivity[];
}

interface UsageTableRow {
  kind: 'section' | 'activity';
  title?: string;
  activity?: UsageActivity;
  hideBorder?: boolean;
}

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
})
export class UsageComponent {
  activeTab: 'activity' | 'document' = 'activity';
  readonly reportDateChipValue = 'March 2026 (Current Month)';

  readonly filterDropdowns = [
    { label: 'Product', showProductIcon: true },
    { label: 'Workspace', showProductIcon: false },
    { label: 'Report Date', showProductIcon: false },
    { label: 'User', showProductIcon: false },
    { label: 'Client/Matter', showProductIcon: false },
  ];

  readonly usageSections: UsageSection[] = [
    {
      title: 'DOCKET RESEARCH',
      activities: [
        { name: 'Case Search', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
        { name: 'Case View', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
        { name: 'Case Document View', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
        { name: 'Case Update', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
      ],
    },
    {
      title: 'DOCKET TRACKING',
      activities: [{ name: 'Case Tracking', used: 8789, limit: 10000, overage: 0, barPercent: 63 }],
    },
    {
      title: 'DOCKET ALERTS',
      activities: [{ name: 'Case Alert', used: 8789, limit: 10000, overage: 0, barPercent: 63 }],
    },
    {
      title: 'ENTITY RESEARCH',
      activities: [
        { name: 'Entity Search', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
        { name: 'Entity Profile View', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
        { name: 'Entity Update', used: 8789, limit: 10000, overage: 0, barPercent: 63 },
      ],
    },
    {
      title: 'ENTITY TRACKING',
      activities: [{ name: 'Entity Track', used: 8789, limit: 10000, overage: 0, barPercent: 63 }],
    },
    {
      title: 'LEGAL ANALYTICS',
      activities: [{ name: 'Analytics View', used: 8789, limit: 10000, overage: 0, barPercent: 63 }],
    },
  ];

  readonly usageTableRows: UsageTableRow[] = this.buildUsageTableRows();

  setActiveTab(tab: 'activity' | 'document'): void {
    this.activeTab = tab;
  }

  formatNumber(value: number): string {
    return value.toLocaleString('en-US');
  }

  private buildUsageTableRows(): UsageTableRow[] {
    const rows: UsageTableRow[] = [];

    this.usageSections.forEach((section, sectionIndex) => {
      const sectionLast = sectionIndex === this.usageSections.length - 1;

      rows.push({ kind: 'section', title: section.title });

      section.activities.forEach((activity, activityIndex) => {
        const activityLast = activityIndex === section.activities.length - 1;
        rows.push({
          kind: 'activity',
          activity,
          hideBorder: sectionLast && activityLast,
        });
      });
    });

    return rows;
  }
}
