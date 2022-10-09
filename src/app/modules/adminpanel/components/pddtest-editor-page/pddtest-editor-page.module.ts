import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddtestEditorPageRoutingModule } from './pddtest-editor-page-routing.module';
import { PddtestEditorPageComponent } from './pddtest-editor-page.component';


@NgModule({
  declarations: [
    PddtestEditorPageComponent
  ],
  imports: [
    CommonModule,
    PddtestEditorPageRoutingModule
  ]
})
export class PddtestEditorPageModule { }
