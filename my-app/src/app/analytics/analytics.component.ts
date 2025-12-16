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
      },
      xAxis: {
        type: 'category',
        data: [
          '2006',
          '2008',
          '2010',
          '2012',
          '2014',
          '2016',
          '2018',
          '2020',
          '2022',
          '2024',
        ],
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 25,
      },
      series: [
        {
          data: [10, 100, 20, 15, 30, 80, 70, 60, 75, 50],
          type: 'line',
          smooth: false,
          markLine: {
            data: [
              { xAxis: '2006' },
              { xAxis: '2008' },
              { xAxis: '2010' },
              { xAxis: '2012' },
              { xAxis: '2014' },
              { xAxis: '2016' },
              { xAxis: '2018' },
              { xAxis: '2020' },
              { xAxis: '2022' },
              { xAxis: '2024' },
            ],
            lineStyle: {
              color: '#ABBDD1',
              type: 'solid',
              width: 1,
            },
            symbol: 'none',
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
            formatter: '{b} \n {c} cases ({d}%)',
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
            { value: 4, name: 'Category A', itemStyle: { color: '#A71042' } },
            { value: 2, name: 'Category B', itemStyle: { color: '#B541FC' } },
            { value: 1, name: 'Category C', itemStyle: { color: '#F8E00B' } },
            { value: 5, name: 'Category D', itemStyle: { color: '#009EBD' } },
            { value: 54, name: 'Category A', itemStyle: { color: '#A71042' } },
            { value: 62, name: 'Category B', itemStyle: { color: '#B541FC' } },
            { value: 20, name: 'Category C', itemStyle: { color: '#F8E00B' } },
            { value: 104, name: 'Category D', itemStyle: { color: '#009EBD' } },
            { value: 54, name: 'Category A', itemStyle: { color: '#A71042' } },
            { value: 62, name: 'Category B', itemStyle: { color: '#B541FC' } },
            { value: 20, name: 'Category C', itemStyle: { color: '#F8E00B' } },
            { value: 104, name: 'Category D', itemStyle: { color: '#009EBD' } },
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
