import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { themeColors } from '../casedetail/chart-theme-colors';

declare const echarts: {
  init: (dom: HTMLElement) => {
    setOption: (option: object) => void;
    resize: () => void;
    dispose: () => void;
  };
};

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
export class Cursertest2Component implements AfterViewInit, OnDestroy {
  private plaintiffChart: ReturnType<typeof echarts.init> | null = null;
  private defendantChart: ReturnType<typeof echarts.init> | null = null;
  private readonly resizeHandler = (): void => {
    this.plaintiffChart?.resize();
    this.defendantChart?.resize();
  };
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

  activeMotionPanel: number | null = 0;

  toggleMotionPanel(panelIndex: number): void {
    this.activeMotionPanel =
      this.activeMotionPanel === panelIndex ? null : panelIndex;
  }

  isMotionPanelOpen(panelIndex: number): boolean {
    return this.activeMotionPanel === panelIndex;
  }

  ngAfterViewInit(): void {
    this.plaintiffChart = this.createPlaintiffGauge('cursertest2-plaintiff-chart');
    this.defendantChart = this.createDefendantPie('cursertest2-defendant-chart');
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    this.plaintiffChart?.dispose();
    this.defendantChart?.dispose();
  }

  private createPlaintiffGauge(
    domId: string,
  ): ReturnType<typeof echarts.init> | null {
    const dom = document.getElementById(domId);
    if (!dom) {
      return null;
    }

    const gaugeData = [
      {
        value: 0,
        detail: {
          valueAnimation: false,
          offsetCenter: ['0%', '0%'],
        },
      },
    ];

    const chart = echarts.init(dom);
    chart.setOption({
      animationDuration: 4000,
      animationDurationUpdate: 4000,
      series: [
        {
          type: 'gauge',
          color: themeColors.secondary[600],
          animation: true,
          animationDurationUpdate: 4000,
          startAngle: 90,
          endAngle: -270,
          pointer: { show: false },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: { borderWidth: 1 },
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 10,
              color: [[1, themeColors.secondary[50]]],
            },
          },
          splitLine: { show: false, distance: 0, length: 10 },
          axisTick: { show: false },
          axisLabel: { show: false, distance: 50 },
          data: gaugeData,
          title: { show: false },
          detail: {
            width: 52,
            height: 40,
            fontSize: 14,
            fontWeight: 600,
            color: themeColors.Mdblue[700],
            fontFamily: '"IBM Plex Sans", sans-serif',
            lineHeight: 19.6,
            formatter: '2\nMotions',
          },
        },
      ],
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gaugeData[0].value = 100;
        chart.setOption({
          series: [
            {
              data: gaugeData,
              pointer: { show: false },
            },
          ],
        });
      });
    });

    return chart;
  }

  private createDefendantPie(
    domId: string,
  ): ReturnType<typeof echarts.init> | null {
    const dom = document.getElementById(domId);
    if (!dom) {
      return null;
    }

    const chart = echarts.init(dom);
    chart.setOption({
      animationDuration: 4000,
      animationDurationUpdate: 4000,
      series: [
        {
          type: 'pie',
          radius: ['61.5%', '75%'],
          center: ['50%', '50%'],
          startAngle: 90,
          clockwise: true,
          silent: true,
          animation: true,
          animationDuration: 4000,
          animationDurationUpdate: 4000,
          label: { show: false },
          labelLine: { show: false },
          emphasis: { disabled: true },
          data: [
            { value: 1, itemStyle: { color: themeColors.red[600], borderWidth: 0 } },
            { value: 1, itemStyle: { color: themeColors.gray[300], borderWidth: 0 } },
            { value: 1, itemStyle: { color: themeColors.secondary[600], borderWidth: 0 } },
          ],
        },
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '3\nMotions',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fill: themeColors.Mdblue[700],
            font: '600 14px "IBM Plex Sans", sans-serif',
            lineHeight: 19.6,
          },
        },
      ],
    });

    return chart;
  }

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
