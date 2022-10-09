import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationEditorPageRoutingModule } from './information-editor-page-routing.module';
import { InformationEditorPageComponent } from './information-editor-page.component';


@NgModule({
  declarations: [
    InformationEditorPageComponent
  ],
  imports: [
    CommonModule,
    InformationEditorPageRoutingModule
  ]
})
export class InformationEditorPageModule { }
