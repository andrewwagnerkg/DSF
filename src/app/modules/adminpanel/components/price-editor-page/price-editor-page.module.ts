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
    PriceEditorPageRoutingModule
  ]
})
export class PriceEditorPageModule { }
