import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
// Side nav open close - Animation imports for smooth expand/collapse transitions
import { trigger, state, style, transition, animate } from '@angular/animations';
import theme from '../../utils/echart-theme.json';

declare var echarts: any;

@Component({
  selector: 'app-newtheme',
  templateUrl: './newtheme.component.html',
  styleUrls: ['./newtheme.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // Side nav open close - Animation configuration for navigation menu expand/collapse
  animations: [
    trigger('slideInOut', [
      // Side nav open close - Open state: full height, visible with fade in
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      // Side nav open close - Closed state: collapsed height, invisible with fade out
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      // Side nav open close - Smooth transition between open and closed states (300ms)
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ]),
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NewthemeComponent implements AfterViewInit {
  private donutChart: any;
  // Side nav open close - Track global navigation menu state (default: open)
  globalNavOpen = true;
  showGlobalNavTooltip = false;
  globalNavTooltipStyle: { left?: string; top?: string } = {};
  // Side nav open close - Track project navigation menu state (default: open)
  projectNavOpen = true;
  showProjectNavTooltip = false;
  projectNavTooltipStyle: { left?: string; top?: string } = {};
  // Track active tab (default: searches)
  activeTab = 'searches';
  // Track active filter tab (default: cases)
  activeFilterTab = 'cases';
  // Track sidebar collapsed state (default: expanded)
  sidebarCollapsed = false;

  // Side nav open close - Toggle global navigation menu open/close
  toggleGlobalNav(): void {
    this.globalNavOpen = !this.globalNavOpen;
  }

  setGlobalNavTooltipPosition(event: MouseEvent): void {
    const el = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.globalNavTooltipStyle = {
      left: `${el.right + 4}px`,
      top: `${el.top + el.height / 2}px`
    };
    this.showGlobalNavTooltip = true;
  }

  hideGlobalNavTooltip(): void {
    this.showGlobalNavTooltip = false;
  }

  // Side nav open close - Toggle project navigation menu open/close
  toggleProjectNav(): void {
    this.projectNavOpen = !this.projectNavOpen;
  }

  setProjectNavTooltipPosition(event: MouseEvent): void {
    const el = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.projectNavTooltipStyle = {
      left: `${el.right + 4}px`,
      top: `${el.top + el.height / 2}px`
    };
    this.showProjectNavTooltip = true;
  }

  hideProjectNavTooltip(): void {
    this.showProjectNavTooltip = false;
  }

  // Set active tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Set active filter tab
  setActiveFilterTab(tab: string): void {
    this.activeFilterTab = tab;
  }

  // Toggle sidebar collapsed/expanded
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

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
