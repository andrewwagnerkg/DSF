import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationEditorPageRoutingModule } from './information-editor-page-routing.module';
import { InformationEditorPageComponent } from './information-editor-page.component';
import { EditQustionComponent } from './components/edit-qustion/edit-qustion.component';


@NgModule({
  declarations: [
    InformationEditorPageComponent,
    EditQustionComponent
  ],
  imports: [
    CommonModule,
    InformationEditorPageRoutingModule,
    FormsModule
  ]
})
export class InformationEditorPageModule { }
