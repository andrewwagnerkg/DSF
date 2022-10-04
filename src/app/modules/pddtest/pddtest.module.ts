import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddtestRoutingModule } from './pddtest-routing.module';
import { PddtestComponent } from './pddtest.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { PddTestComponent } from './components/pdd-test/pdd-test.component';
import { QuestionComponent } from './components/question/question.component';


@NgModule({
  declarations: [
    PddtestComponent,
    TicketListComponent,
    PddTestComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    PddtestRoutingModule
  ]
})
export class PddtestModule { }
