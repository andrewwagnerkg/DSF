import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditorPageRoutingModule } from './contact-editor-page-routing.module';
import { ContactEditorPageComponent } from './contact-editor-page.component';


@NgModule({
  declarations: [
    ContactEditorPageComponent
  ],
  imports: [
    CommonModule,
    ContactEditorPageRoutingModule
  ]
})
export class ContactEditorPageModule { }
