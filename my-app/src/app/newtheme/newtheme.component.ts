import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import theme from '../../utils/echart-theme.json';

declare var echarts: any;

@Component({
  selector: 'app-newtheme',
  templateUrl: './newtheme.component.html',
  styleUrls: ['./newtheme.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewthemeComponent implements AfterViewInit {
  private donutChart: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initDonutChart();
    }, 100);
  }

  initDonutChart(): void {
    const dom = document.getElementById('donut-chart-judgement');
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
        formatter: '{b}: ${c} ({d}%)',
        confine: false,
        position: function (point: any, params: any, dom: any, rect: any, size: any) {
          // Get chart dimensions
          const chartWidth = size.viewSize[0];
          const chartHeight = size.viewSize[1];
          const tooltipWidth = size.contentSize[0];
          const tooltipHeight = size.contentSize[1];

          // Chart center and radius (for donut chart)
          const centerX = chartWidth / 2;
          const centerY = chartHeight / 2;
          const radius = Math.min(chartWidth, chartHeight) * 0.35; // 70% of min dimension / 2

          // Calculate distance from center
          const dx = point[0] - centerX;
          const dy = point[1] - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Handle edge case when hovering at center
          let normX = 1;
          let normY = 0;
          if (distance > 0.1) {
            // Normalize direction vector
            normX = dx / distance;
            normY = dy / distance;
          }

          // Position tooltip well outside the chart circle (beyond the outer radius)
          const offsetDistance = radius + 40; // 40px beyond the outer edge
          let posX = centerX + (normX * offsetDistance);
          let posY = centerY + (normY * offsetDistance);

          // Adjust tooltip position to center it on the calculated point
          posX = posX - tooltipWidth / 2;
          posY = posY - tooltipHeight / 2;

          // Ensure tooltip stays within viewport bounds with padding
          const padding = 10;
          if (posX < padding) {
            posX = padding;
          } else if (posX + tooltipWidth > chartWidth - padding) {
            posX = chartWidth - tooltipWidth - padding;
          }

          if (posY < padding) {
            posY = padding;
          } else if (posY + tooltipHeight > chartHeight - padding) {
            posY = chartHeight - tooltipHeight - padding;
          }

          return [posX, posY];
        },
        extraCssText: 'z-index: 9999 !important; pointer-events: none !important;',
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: 'Award Breakdown',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: true,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}\n${c} ({d}%)',
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
            { value: 100000, name: 'Damages Type', itemStyle: { color: '#014E1C' } },
            { value: 70000, name: 'Damages Type', itemStyle: { color: '#016323' } },
            { value: 15000, name: 'Damages Type', itemStyle: { color: '#008B31' } },
            { value: 10000, name: 'Damages Type', itemStyle: { color: '#5BB966' } },
            { value: 5000, name: 'Damages Type', itemStyle: { color: '#8AD082' } },
          ],
        },
      ],
    };

    if (option && typeof option === 'object') {
      this.donutChart.setOption(option);
    }

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      if (this.donutChart) {
        this.donutChart.resize();
      }
    });
    resizeObserver.observe(dom);

    // Also handle window resize
    window.addEventListener('resize', () => {
      if (this.donutChart) {
        this.donutChart.resize();
      }
    });
  }
}
