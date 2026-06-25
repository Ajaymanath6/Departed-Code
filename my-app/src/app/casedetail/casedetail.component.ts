import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

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
  /** Tracks which hearing accordion row is expanded. */
  activeHearingPanel: number | null = 0;

  /** Tracks which motion accordion row is expanded. */
  activeMotionPanel: number | null = 0;

  /** Tracks which motion design 2 accordion row is expanded. */
  activeMotionDesign2Panel: number | null = 0;

  private plaintiffChart: ReturnType<typeof echarts.init> | null = null;
  private defendantChart: ReturnType<typeof echarts.init> | null = null;
  private motionsTabPlaintiffChart: ReturnType<typeof echarts.init> | null = null;
  private motionsTabDefendantChart: ReturnType<typeof echarts.init> | null = null;
  private readonly resizeHandler = (): void => {
    this.plaintiffChart?.resize();
    this.defendantChart?.resize();
    this.motionsTabPlaintiffChart?.resize();
    this.motionsTabDefendantChart?.resize();
  };

  toggleHearingPanel(panelIndex: number): void {
    this.activeHearingPanel =
      this.activeHearingPanel === panelIndex ? null : panelIndex;
  }

  isHearingPanelOpen(panelIndex: number): boolean {
    return this.activeHearingPanel === panelIndex;
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

  ngAfterViewInit(): void {
    this.plaintiffChart = this.createPlaintiffGauge('motion-summary-plaintiff-chart');
    this.defendantChart = this.createDefendantPie('motion-summary-defendant-chart');
    this.motionsTabPlaintiffChart = this.createPlaintiffGauge(
      'motions-tab-plaintiff-chart',
    );
    this.motionsTabDefendantChart = this.createDefendantPie(
      'motions-tab-defendant-chart',
    );
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    this.plaintiffChart?.dispose();
    this.defendantChart?.dispose();
    this.motionsTabPlaintiffChart?.dispose();
    this.motionsTabDefendantChart?.dispose();
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
          color: '#028831',
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
              color: [[1, '#DEE9E7']],
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
            color: '#000000',
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
            { value: 1, itemStyle: { color: '#C20205', borderWidth: 0 } },
            { value: 1, itemStyle: { color: '#C5C5C5', borderWidth: 0 } },
            { value: 1, itemStyle: { color: '#028831', borderWidth: 0 } },
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
            fill: '#000000',
            font: '600 14px "IBM Plex Sans", sans-serif',
            lineHeight: 19.6,
          },
        },
      ],
    });

    return chart;
  }
}
