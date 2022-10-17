import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';


@NgModule({
  declarations: [
    InformationComponent,
    AccordionComponent,
    SendQuestionComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformationModule { }
