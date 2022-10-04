import { ToTimeStringPipe } from 'src/app/pipes/to-time-string.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddtestRoutingModule } from './pddtest-routing.module';
import { PddtestComponent } from './pddtest.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { PddTestComponent } from './components/pdd-test/pdd-test.component';
import { QuestionComponent } from './components/question/question.component';
import { TimerComponent } from './components/timer/timer.component';
import { QuestionStatusToClassPipe } from 'src/app/pipes/question-status-to-class.pipe';
import { TestResultComponent } from './components/test-result/test-result.component';


@NgModule({
  declarations: [
    PddtestComponent,
    TicketListComponent,
    PddTestComponent,
    QuestionComponent,
    TimerComponent,
    QuestionStatusToClassPipe,
    ToTimeStringPipe,
    TestResultComponent
  ],
  imports: [
    CommonModule,
    PddtestRoutingModule
  ]
})
export class PddtestModule { }
