import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutEditorPageRoutingModule } from './about-editor-page-routing.module';
import { AboutEditorPageComponent } from './about-editor-page.component';


@NgModule({
  declarations: [
    AboutEditorPageComponent
  ],
  imports: [
    CommonModule,
    AboutEditorPageRoutingModule
  ]
})
export class AboutEditorPageModule { }
