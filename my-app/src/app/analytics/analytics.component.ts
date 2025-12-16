import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import theme from '../../utils/echart-theme.json';

declare var echarts: any;

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnalyticsComponent implements AfterViewInit {
  activeTab: string = 'second';
  private lineChart: any;
  private donutChart: any;

  switchTab(tab: string): void {
    this.activeTab = tab;
    // Reinitialize charts when tab changes to ensure they render
    if (tab === 'first') {
      setTimeout(() => {
        this.initLineChart();
        this.initDonutChart();
      }, 100);
    }
  }

  ngAfterViewInit(): void {
    // Initialize charts if first tab is active, otherwise wait for tab switch
    if (this.activeTab === 'first') {
      setTimeout(() => {
        this.initLineChart();
        this.initDonutChart();
      }, 100);
    }
  }

  initLineChart(): void {
    const dom = document.getElementById('line-artemis');
    if (!dom) {
      return;
    }

    // Dispose existing chart if it exists
    if (this.lineChart) {
      this.lineChart.dispose();
    }

    echarts.registerTheme('Apollo', theme);
    this.lineChart = echarts.init(dom, 'Apollo');

    const option = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '5%',
        containLabel: true,
        show: false,
      },
      xAxis: {
        type: 'category',
        data: [
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
          '2024',
        ],
        boundaryGap: false,
        axisLine: {
          show: true,
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 25,
        axisLabel: {
          show: true,
          color: '#001a31',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#cccccc',
          },
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e5e7eb',
            type: 'solid',
            width: 1,
          },
        },
      },
      series: [
        {
          name: 'Judgment',
          data: [20, 80, 35, 15, 35, 90, 70, 80, 75, 70],
          type: 'line',
          smooth: false,
          itemStyle: {
            color: '#3258dd',
          },
          lineStyle: {
            color: '#3258dd',
            width: 2,
          },
        },
        {
          name: 'Verdict',
          data: [10, 55, 20, 0, 20, 20, 15, 25, 35, 40],
          type: 'line',
          smooth: false,
          itemStyle: {
            color: '#10b981',
          },
          lineStyle: {
            color: '#10b981',
            width: 2,
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
        extraCssText: 'z-index: 10;',
      },
    };

    if (option && typeof option === 'object') {
      this.lineChart.setOption(option);
    }

    // ResizeObserver handles all resize cases (container and window resize)
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        if (this.lineChart) {
          this.lineChart.resize();
        }
      });
      resizeObserver.observe(dom);
    } else {
      // Fallback for browsers without ResizeObserver support
      window.addEventListener('resize', () => {
        if (this.lineChart) {
          this.lineChart.resize();
        }
      });
    }
  }

  initDonutChart(): void {
    const dom = document.getElementById('artemis-donut');
    if (!dom) {
      return;
    }

    // Dispose existing chart if it exists
    if (this.donutChart) {
      this.donutChart.dispose();
    }

    echarts.registerTheme('Apollo', theme);
    this.donutChart = echarts.init(dom, 'Apollo');

    const option = {
      tooltip: {
        trigger: 'item',
        borderWidth: 0,
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: 'Case Distribution',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: true,
          label: {
            show: true,
            position: 'outside',
            formatter: '{c} judgments ({d}%)',
            fontSize: 12,
            color: '#001A31',
          },
          labelLine: {
            show: true,
            length: 10,
            length2: 20,
            color: '#EAEEF2',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 13,
              fontWeight: 'bold',
            },
          },
          data: [
            { value: 104, name: 'Category A', itemStyle: { color: '#1e40af' } },
            { value: 54, name: 'Category B', itemStyle: { color: '#3b82f6' } },
            { value: 62, name: 'Category C', itemStyle: { color: '#60a5fa' } },
            { value: 20, name: 'Category D', itemStyle: { color: '#93c5fd' } },
          ],
        },
      ],
    };

    if (option && typeof option === 'object') {
      this.donutChart.setOption(option);
    }

    // ResizeObserver handles all resize cases (container and window resize)
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        if (this.donutChart) {
          this.donutChart.resize();
        }
      });
      resizeObserver.observe(dom);
    } else {
      // Fallback for browsers without ResizeObserver support
      window.addEventListener('resize', () => {
        if (this.donutChart) {
          this.donutChart.resize();
        }
      });
    }
  }
}
