import { Component } from '@angular/core';

interface SidebarNavItem {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
}

type QuartileColor = 'primary' | 'primary-light' | 'orange' | 'orange-light';

interface QuartileMetric {
  value: string;
  filled: number;
  color: QuartileColor;
}

interface DashboardTile {
  label: string;
  value: string;
  metric?: QuartileMetric;
}

interface CaseTypeRow {
  name: string;
  cases: string;
  percentage: string;
  dotClass: string;
}

@Component({
  selector: 'app-cursertest2',
  templateUrl: './cursertest2.component.html',
  styleUrls: ['./cursertest2.component.scss']
})
export class Cursertest2Component {
  readonly projectNavItems: SidebarNavItem[] = [
    { icon: 'home', label: 'Home' },
    { icon: 'search', label: 'Search', active: true },
    { icon: 'access_time_filled', label: 'Tracking', badge: '1' },
    { icon: 'insert_chart', label: 'Analytics' },
    { icon: 'push_pin', label: 'Pins' },
    { icon: 'file_download', label: 'Exports' },
    { icon: 'receipt_long', label: 'Orders' }
  ];

  readonly entityTabs = [
    'Summary',
    'Profile',
    'Judgments',
    'Attorneys',
    'Law Firms',
    'Parties',
    'Judges',
    'Cases'
  ];

  readonly activeEntityTab = 'Judgments';

  readonly filterDropdowns: { label: string; icon: string }[] = [
    { label: 'Filing Date', icon: 'chevron_right' },
    { label: 'Case Type', icon: 'chevron_right' },
    { label: 'Courts', icon: 'expand_more' },
    { label: 'Party Role', icon: 'chevron_right' }
  ];

  readonly activeFilters = [
    'Filing Date: October 2025',
    'Case Type: Personal Injury',
    'Court: Federal'
  ];

  readonly judgmentTiles: DashboardTile[] = [
    { label: 'Total Judgments', value: '267', metric: { value: '267', filled: 3, color: 'primary' } },
    { label: '% of Cases to Judgment', value: '20%', metric: { value: '20%', filled: 2, color: 'orange' } },
    { label: 'Judgment Win Percentage', value: '20%', metric: { value: '20%', filled: 1, color: 'orange-light' } }
  ];

  readonly verdictTiles: DashboardTile[] = [
    { label: 'Total Verdicts', value: '36', metric: { value: '36', filled: 4, color: 'primary' } },
    { label: '% of Cases to Verdict', value: '30%', metric: { value: '30%', filled: 3, color: 'primary-light' } },
    { label: 'Verdict Win Percentage', value: '30%', metric: { value: '30%', filled: 4, color: 'primary' } }
  ];

  readonly amountTiles = [
    { label: 'Total Judgment Amount Awarded', value: '$1,000,000' },
    { label: 'Median Judgment Amount Awarded', value: '$1,000,000' }
  ];

  readonly chartYears = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'
  ];

  readonly caseTypeTabs = ['All Judgements', 'Verdicts'];
  readonly activeCaseTypeTab = 'All Judgements';

  readonly caseTypeRows: CaseTypeRow[] = [
    { name: 'Personal Injury', cases: '104', percentage: '43.33%', dotClass: 'bg-secondary-900' },
    { name: 'Healthcare/Medical Fraud', cases: '62', percentage: '25.83%', dotClass: 'bg-primary-600' },
    { name: "Workers' Compensation", cases: '54', percentage: '22.5%', dotClass: 'bg-secondary-600' },
    { name: 'Property Damage', cases: '62', percentage: '25.8%', dotClass: 'bg-yellow-500' },
    { name: 'Bankruptcy', cases: '32', percentage: '12.33%', dotClass: 'bg-secondary-900' },
    { name: 'Estate', cases: '22', percentage: '8.83%', dotClass: 'bg-primary-600' },
    { name: 'Intellectual Property', cases: '10', percentage: '6.83%', dotClass: 'bg-secondary-600' }
  ];

  readonly quartileBarIndexes = [0, 1, 2, 3];

  getQuartileBarClass(metric: QuartileMetric, index: number): string {
    const base = 'caa-quartile__bar';
    if (index >= metric.filled) {
      return `${base} bg-gray-100`;
    }
    const colorMap: Record<QuartileColor, string> = {
      primary: `${base} bg-primary-600`,
      'primary-light': `${base} bg-primary-300`,
      orange: `${base} bg-orange-600`,
      'orange-light': `${base} bg-orange-300`
    };
    return colorMap[metric.color];
  }
}
