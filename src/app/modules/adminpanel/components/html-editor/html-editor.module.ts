import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';



@NgModule({
  declarations: [
HtmlEditorComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    HtmlEditorComponent
  ]
})
export class HtmlEditorModule { }
