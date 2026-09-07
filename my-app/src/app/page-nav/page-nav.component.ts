import { Component } from '@angular/core';

interface PageLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
})
export class PageNavComponent {
  readonly pages: PageLink[] = [
    { path: '/login', label: 'Login' },
    { path: '/plan', label: 'Plan' },
    { path: '/search', label: 'Search' },
    { path: '/settings', label: 'Settings' },
    { path: '/test', label: 'Test' },
    { path: '/test2', label: 'Test 2' },
    { path: '/deep', label: 'Deep' },
    { path: '/semantic', label: 'Semantic' },
    { path: '/chatgpt', label: 'ChatGPT' },
    { path: '/chatgpt-project', label: 'ChatGPT Project' },
    { path: '/chatgpt-template', label: 'ChatGPT Template' },
    { path: '/mobileUI', label: 'Mobile UI' },
    { path: '/scrolltest', label: 'Scroll Test' },
    { path: '/profile', label: 'Profile' },
    { path: '/searchwidget', label: 'Search Widget' },
    { path: '/project', label: 'Project' },
    { path: '/cursor', label: 'Cursor' },
    { path: '/test-cursor', label: 'Test Cursor' },
    { path: '/curscursoror', label: 'Cost Estimation' },
    { path: '/email-temp', label: 'Email Temp' },
    { path: '/email-temp-test', label: 'Email Temp Test' },
    { path: '/tooltip', label: 'Tooltip' },
    { path: '/newtheme', label: 'New Theme' },
    { path: '/sidebar', label: 'Sidebar' },
    { path: '/tablevarsh', label: 'Table Varsh' },
    { path: '/aiui', label: 'AI UI' },
    { path: '/aiui-premium', label: 'AI Premium' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/helpcenter', label: 'Help Center' },
    { path: '/alert', label: 'Alert' },
    { path: '/document-order', label: 'Document Order' },
    { path: '/motion', label: 'Motion' },
    { path: '/casedetail', label: 'Case Detail' },
    { path: '/casedetail2', label: 'Case Detail 2' },
    { path: '/usage', label: 'Usage' },
    { path: '/exports', label: 'Exports' },
    { path: '/ula', label: 'ULA' },
    { path: '/ula-help', label: 'ULA Help' },
    { path: '/ula-recent', label: 'ULA Recent' },
    { path: '/ula-results', label: 'ULA Results' },
    { path: '/echarts', label: 'ECharts' },
    { path: '/echarts-map', label: 'ECharts Map' },
    { path: '/gauge-multicolor', label: 'Gauge Multicolor' },
  ];
}
