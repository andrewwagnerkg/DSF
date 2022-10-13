import { AngularEditorModule } from '@kolkov/angular-editor';
import { HtmlEditorComponent } from './../html-editor/html-editor/html-editor.component';
import { HtmlEditorModule } from './../html-editor/html-editor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutEditorPageRoutingModule } from './about-editor-page-routing.module';
import { AboutEditorPageComponent } from './about-editor-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutEditorPageComponent,
  ],
  imports: [
    CommonModule,
    AboutEditorPageRoutingModule,
    HtmlEditorModule,
  ]
})
export class AboutEditorPageModule { }
