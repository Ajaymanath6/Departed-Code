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
  private plaintiffChart: ReturnType<typeof echarts.init> | null = null;
  private defendantChart: ReturnType<typeof echarts.init> | null = null;
  private readonly resizeHandler = (): void => {
    this.plaintiffChart?.resize();
    this.defendantChart?.resize();
  };

  ngAfterViewInit(): void {
    this.initPlaintiffChart();
    this.initDefendantChart();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    this.plaintiffChart?.dispose();
    this.defendantChart?.dispose();
  }

  private initPlaintiffChart(): void {
    const dom = document.getElementById('motion-summary-plaintiff-chart');
    if (!dom) {
      return;
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

    this.plaintiffChart = echarts.init(dom);
    this.plaintiffChart.setOption({
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
        this.plaintiffChart?.setOption({
          series: [
            {
              data: gaugeData,
              pointer: { show: false },
            },
          ],
        });
      });
    });
  }

  private initDefendantChart(): void {
    const dom = document.getElementById('motion-summary-defendant-chart');
    if (!dom) {
      return;
    }

    this.defendantChart = echarts.init(dom);
    this.defendantChart.setOption({
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
  }
}
