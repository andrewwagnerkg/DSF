import { HtmlEditorModule } from './../html-editor/html-editor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceEditorPageRoutingModule } from './price-editor-page-routing.module';
import { PriceEditorPageComponent } from './price-editor-page.component';


@NgModule({
  declarations: [
    PriceEditorPageComponent
  ],
  imports: [
    CommonModule,
    PriceEditorPageRoutingModule,
    HtmlEditorModule
  ]
})
export class PriceEditorPageModule { }
