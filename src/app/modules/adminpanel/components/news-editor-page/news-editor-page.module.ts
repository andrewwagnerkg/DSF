import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsEditorPageRoutingModule } from './news-editor-page-routing.module';
import { NewsEditorPageComponent } from './news-editor-page.component';


@NgModule({
  declarations: [
    NewsEditorPageComponent
  ],
  imports: [
    CommonModule,
    NewsEditorPageRoutingModule
  ]
})
export class NewsEditorPageModule { }
