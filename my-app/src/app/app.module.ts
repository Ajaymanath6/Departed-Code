import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { TestComponent } from './test/test.component';
import { SemanticsearchComponent } from './semanticsearch/semanticsearch.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { ChipComponent } from './chip/chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { MobileUIComponent } from './mobile-ui/mobile-ui.component';
import { Test2Component } from './test2/test2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeepComponent } from './deep/deep.component';
import { ScrolltestComponent } from './scrolltest/scrolltest.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { ProjectComponent } from './project/project.component';
import { TooltipTestComponent } from './tooltip-test/tooltip-test.component';
import { CursoruiModule } from './cursorui/cursorui.module';
import { CostestimationComponent } from './costestimation/costestimation.component';
import { Cursertest2Component } from './cursertest2/cursertest2.component';
import { NewthemeComponent } from './newtheme/newtheme.component';
import { EmailTempComponent } from './email-temp/email-temp.component';
import { VarshiTableComponent } from './varshi-table/varshi-table.component';
import { AIUiComponent } from './ai-ui/ai-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    PlanComponent,
    SearchComponent,
    SettingsComponent,
    TestComponent,
    SemanticsearchComponent,
    SearchBarComponent,
    ChipComponent,
    ChatgptComponent,
    ChildCompComponent,
    MobileUIComponent,
    Test2Component,
    DeepComponent,
    ScrolltestComponent,
    ProfilepageComponent,
    SearchWidgetComponent,
    ProjectComponent,
    TooltipTestComponent,
    CostestimationComponent,
    Cursertest2Component,
    NewthemeComponent,
    EmailTempComponent,
    VarshiTableComponent,
    AIUiComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CursoruiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
