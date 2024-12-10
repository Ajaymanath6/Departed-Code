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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
