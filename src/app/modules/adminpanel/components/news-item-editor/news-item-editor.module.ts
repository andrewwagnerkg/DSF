import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemEditorComponent } from './news-item-editor/news-item-editor.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NewsItemEditorComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    NewsItemEditorComponent
  ]
})
export class NewsItemEditorModule { }
