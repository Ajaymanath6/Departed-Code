import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { themeColors } from './chart-theme-colors';

declare const echarts: {
  init: (dom: HTMLElement) => {
    setOption: (option: object) => void;
    resize: () => void;
    dispose: () => void;
  };
};

@Component({
  selector: 'app-casedetail',
  templateUrl: './casedetail.component.html',
  styleUrls: ['./casedetail.component.scss'],
})
export class CasedetailComponent implements AfterViewInit, OnDestroy {
  /** Tracks which hearing accordion rows are expanded. */
  private readonly openHearingPanels = new Set<number>([0, 1]);

  /** Tracks which motion accordion row is expanded. */
  activeMotionPanel: number | null = 0;

  /** Tracks which motion design 2 accordion row is expanded. */
  activeMotionDesign2Panel: number | null = 0;

  /** Tracks which judgment accordion row is expanded. */
  activeJudgmentPanel: number | null = 0;

  /** Tracks which award breakdown accordion is expanded inside a judgment row. */
  activeAwardBreakdownPanel: number | null = 0;

  private plaintiffChart: ReturnType<typeof echarts.init> | null = null;
  private defendantChart: ReturnType<typeof echarts.init> | null = null;
  private motionsTabPlaintiffChart: ReturnType<typeof echarts.init> | null = null;
  private motionsTabDefendantChart: ReturnType<typeof echarts.init> | null = null;
  private judgmentAwardDonutChart: ReturnType<typeof echarts.init> | null = null;
  private readonly resizeHandler = (): void => {
    this.plaintiffChart?.resize();
    this.defendantChart?.resize();
    this.motionsTabPlaintiffChart?.resize();
    this.motionsTabDefendantChart?.resize();
    this.judgmentAwardDonutChart?.resize();
  };

  toggleHearingPanel(panelIndex: number): void {
    if (this.openHearingPanels.has(panelIndex)) {
      this.openHearingPanels.delete(panelIndex);
    } else {
      this.openHearingPanels.add(panelIndex);
    }
  }

  isHearingPanelOpen(panelIndex: number): boolean {
    return this.openHearingPanels.has(panelIndex);
  }

  toggleMotionPanel(panelIndex: number): void {
    this.activeMotionPanel =
      this.activeMotionPanel === panelIndex ? null : panelIndex;
  }

  isMotionPanelOpen(panelIndex: number): boolean {
    return this.activeMotionPanel === panelIndex;
  }

  toggleMotionDesign2Panel(panelIndex: number): void {
    this.activeMotionDesign2Panel =
      this.activeMotionDesign2Panel === panelIndex ? null : panelIndex;
  }

  isMotionDesign2PanelOpen(panelIndex: number): boolean {
    return this.activeMotionDesign2Panel === panelIndex;
  }

  toggleJudgmentPanel(panelIndex: number): void {
    this.activeJudgmentPanel =
      this.activeJudgmentPanel === panelIndex ? null : panelIndex;
  }

  isJudgmentPanelOpen(panelIndex: number): boolean {
    return this.activeJudgmentPanel === panelIndex;
  }

  toggleAwardBreakdownPanel(panelIndex: number): void {
    const wasOpen = this.activeAwardBreakdownPanel === panelIndex;
    this.activeAwardBreakdownPanel =
      this.activeAwardBreakdownPanel === panelIndex ? null : panelIndex;

    if (!wasOpen && panelIndex === 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!this.judgmentAwardDonutChart) {
            this.judgmentAwardDonutChart = this.createAwardBreakdownDonut(
              'judgments-tab-award-donut',
            );
          } else {
            this.judgmentAwardDonutChart.resize();
          }
        });
      });
    }
  }

  isAwardBreakdownPanelOpen(panelIndex: number): boolean {
    return this.activeAwardBreakdownPanel === panelIndex;
  }

  ngAfterViewInit(): void {
    this.plaintiffChart = this.createPlaintiffGauge('motion-summary-plaintiff-chart');
    this.defendantChart = this.createDefendantPie('motion-summary-defendant-chart');
    this.motionsTabPlaintiffChart = this.createPlaintiffGauge(
      'motions-tab-plaintiff-chart',
    );
    this.motionsTabDefendantChart = this.createDefendantPie(
      'motions-tab-defendant-chart',
    );
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (this.isAwardBreakdownPanelOpen(0)) {
          this.judgmentAwardDonutChart = this.createAwardBreakdownDonut(
            'judgments-tab-award-donut',
          );
        }
      });
    });
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    this.plaintiffChart?.dispose();
    this.defendantChart?.dispose();
    this.motionsTabPlaintiffChart?.dispose();
    this.motionsTabDefendantChart?.dispose();
    this.judgmentAwardDonutChart?.dispose();
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

  private createAwardBreakdownDonut(
    domId: string,
  ): ReturnType<typeof echarts.init> | null {
    const dom = document.getElementById(domId);
    if (!dom) {
      return null;
    }

    const breakdownData = [
      { value: 100000, name: 'Medical Expenses', color: themeColors.secondary[900] },
      { value: 70000, name: 'Pain and Suffering', color: themeColors.secondary[800] },
      { value: 15000, name: 'Lost Wages', color: themeColors.secondary[600] },
      { value: 10000, name: 'Punitive Damages', color: themeColors.secondary[400] },
      { value: 5000, name: 'Other Damages', color: themeColors.secondary[300] },
    ];

    const chart = echarts.init(dom);
    chart.setOption({
      animationDuration: 4000,
      animationDurationUpdate: 4000,
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          silent: true,
          animation: true,
          animationDuration: 4000,
          animationDurationUpdate: 4000,
          label: { show: false },
          labelLine: { show: false },
          emphasis: { disabled: true },
          data: breakdownData.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color, borderWidth: 0 },
          })),
        },
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '$200,000',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fill: themeColors.secondary[600],
            font: '600 16px "IBM Plex Sans", sans-serif',
            lineHeight: 22.4,
          },
        },
      ],
    });

    return chart;
  }
}
