import { TicketStatusToAlertClassPipe } from './../../../../pipes/ticket-status-to-alert-class.pipe';
import { HtmlEditorModule } from './../html-editor/html-editor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddtestEditorPageRoutingModule } from './pddtest-editor-page-routing.module';
import { PddtestEditorPageComponent } from './pddtest-editor-page.component';
import { TicketlistComponent } from './components/ticketlist/ticketlist.component';
import { AddticketComponent } from './components/addticket/addticket.component';
import { PddquestionlistComponent } from './components/pddquestionlist/pddquestionlist.component';
import { AddQuestionToTicketComponent } from './components/add-question-to-ticket/add-question-to-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TicketStatusToStringPipe } from 'src/app/pipes/ticket-status-to-string.pipe';
import { TicketStatusToButtonTextPipe } from 'src/app/pipes/ticket-status-to-button-text.pipe';
import { TicketStatusToClassPipe } from 'src/app/pipes/ticket-status-to-class.pipe';


@NgModule({
  declarations: [
    PddtestEditorPageComponent,
    TicketlistComponent,
    AddticketComponent,
    PddquestionlistComponent,
    AddQuestionToTicketComponent,
    TicketStatusToButtonTextPipe,
    TicketStatusToStringPipe,
    TicketStatusToClassPipe,
    TicketStatusToAlertClassPipe
  ],
  imports: [
    CommonModule,
    PddtestEditorPageRoutingModule,
    HtmlEditorModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PddtestEditorPageModule { }
