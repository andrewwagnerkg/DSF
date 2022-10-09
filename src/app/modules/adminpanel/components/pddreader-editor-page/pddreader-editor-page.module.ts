import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddreaderEditorPageRoutingModule } from './pddreader-editor-page-routing.module';
import { PddreaderEditorPageComponent } from './pddreader-editor-page.component';


@NgModule({
  declarations: [
    PddreaderEditorPageComponent
  ],
  imports: [
    CommonModule,
    PddreaderEditorPageRoutingModule
  ]
})
export class PddreaderEditorPageModule { }
