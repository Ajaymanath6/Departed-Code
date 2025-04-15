import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoruiComponent } from './cursorui.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CursoruiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CursoruiComponent
  ]
})
export class CursoruiModule { }
