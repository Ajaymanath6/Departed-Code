import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { PlanComponent } from './plan/plan.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SemanticsearchComponent } from './semanticsearch/semanticsearch.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { MobileUIComponent } from './mobile-ui/mobile-ui.component';
import { Test2Component } from './test2/test2.component';
import { DeepComponent } from './deep/deep.component';
import { ScrolltestComponent } from './scrolltest/scrolltest.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { ProjectComponent } from './project/project.component';
import { CursoruiComponent } from './cursorui/cursorui.component';
import { CostestimationComponent } from './costestimation/costestimation.component';
import { Cursertest2Component } from './cursertest2/cursertest2.component';
import { TooltipTestComponent } from './tooltip-test/tooltip-test.component';
import { NewthemeComponent } from './newtheme/newtheme.component';
import { EmailTempComponent } from './email-temp/email-temp.component';
import { VarshiTableComponent } from './varshi-table/varshi-table.component';
import { AIUiComponent } from './ai-ui/ai-ui.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { AlertComponent } from './alert/alert.component';
import { EmailTempTestComponent } from './email-temp-test/email-temp-test.component';
import { DocumentOrderComponent } from './document-order/document-order.component';
import { MotionComponent } from './motion/motion.component';
import { CasedetailComponent } from './casedetail/casedetail.component';
import { Casedetail2Component } from './casedetail2/casedetail2.component';
import { UsageComponent } from './usage/usage.component';
import { ExportsComponent } from './exports/exports.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ULAComponent } from './ula/ula.component';
import { ChatgptProjectComponent } from './chatgpt-project/chatgpt-project.component';
import { ChatgptTemplateComponent } from './chatgpt-template/chatgpt-template.component';
import { AIUiPremiumComponent } from './ai-ui-premium/ai-ui-premium.component';
import { ULAHelpComponent } from './ula-help/ula-help.component';
import { ULARecentComponent } from './ula-recent/ula-recent.component';
import { ULAResultsComponent } from './ula-results/ula-results.component';
import { EchartsPageComponent } from './echarts-page/echarts-page.component';
import { EchartsMapPageComponent } from './echarts-map-page/echarts-map-page.component';
import { GaugeMulticolorPageComponent } from './gauge-multicolor-page/gauge-multicolor-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'plan',
    component: PlanComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'test2',
    component: Test2Component,
  },
  {
    path: 'deep',
    component: DeepComponent,
  },
  {
    path: 'semantic',
    component: SemanticsearchComponent,
  },
  {
    path: 'chatgpt',
    component: ChatgptComponent,
  },
  {
    path: 'chatgpt-project',
    component: ChatgptProjectComponent,
  },
  {
    path: 'chatgpt-template',
    component: ChatgptTemplateComponent,
  },
  {
    path: 'mobileUI',
    component: MobileUIComponent,
  },
  {
    path: 'scrolltest',
    component: ScrolltestComponent,
  },
  {
    path: 'profile',
    component: ProfilepageComponent,
  },
  {
    path: 'searchwidget',
    component: SearchWidgetComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'cursor',
    component: CursoruiComponent,
  },
  {
    path: 'test-cursor',
    component: Cursertest2Component,
  },
  {
    path: 'curscursoror',
    component: CostestimationComponent,
  },
  {
    path: 'email-temp',
    component: EmailTempComponent,
  },
  {
    path: 'email-temp-test',
    component: EmailTempTestComponent,
  },
  {
    path: 'tooltip',
    component: TooltipTestComponent,
  },
  {
    path: 'newtheme',
    component: NewthemeComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'tablevarsh',
    component: VarshiTableComponent,
  },
  {
    path: 'aiui',
    component: AIUiComponent,
  },
  {
    path: 'aiui-premium',
    component: AIUiPremiumComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
    {
      path: 'helpcenter',
      component: HelpcenterComponent,
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'document-order',
      component: DocumentOrderComponent,
    },
    {
      path: 'motion',
      component: MotionComponent,
    },
    {
      path: 'casedetail',
      component: CasedetailComponent,
    },
    {
      path: 'casedetail2',
      component: Casedetail2Component,
    },
    {
      path: 'usage',
      component: UsageComponent,
    },
    {
      path: 'exports',
      component: ExportsComponent,
    },
    {
      path: 'ula',
      component: ULAComponent,
    },
    {
      path: 'ula-help',
      component: ULAHelpComponent,
    },
    {
      path: 'ula-recent',
      component: ULARecentComponent,
    },
    {
      path: 'ula-results',
      component: ULAResultsComponent,
    },
    {
      path: 'echarts',
      component: EchartsPageComponent,
    },
    {
      path: 'echarts-map',
      component: EchartsMapPageComponent,
    },
    {
      path: 'gauge-multicolor',
      component: GaugeMulticolorPageComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
