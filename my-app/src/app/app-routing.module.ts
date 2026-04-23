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
    path: 'curscursoror',
    component: CostestimationComponent,
  },
  {
    path: 'email-temp',
    component: EmailTempComponent,
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
    path: 'tablevarsh',
    component: VarshiTableComponent,
  },
  {
    path: 'aiui',
    component: AIUiComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
