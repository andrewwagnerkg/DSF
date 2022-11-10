import { IQuestion } from './../../types/iquestion';
import { Component, OnInit } from '@angular/core';
import { QuestionStatusEnum } from 'src/app/types/question-status-enum';
import { Ticket } from 'src/app/types/ticket';
import { ITicketQuestion } from 'src/app/types/iticket-question';

@Component({
  selector: 'app-pddtest',
  templateUrl: './pddtest.component.html',
  styleUrls: ['./pddtest.component.scss']
})
export class PddtestComponent implements OnInit {

  public isTest : boolean = false;
  public isTicketTest : boolean = false;
  public questions!:ITicketQuestion[];

  constructor() { }

  ngOnInit(): void {
  }

  public onTicketSelect(ticket: Ticket) : void{
    //получить список вопросов по id билета возможно асинхронно
    this.isTest = true;
    this.isTicketTest = true;
    this.questions = ticket.Questions;
  }

  public testBackButtonClick():void{
    this.isTest = false;
    this.isTicketTest = false;
  }

  public onStartTestButtonClick():void{
    //получить список вопросов для теста возможно асинхронно
    this.isTest = true;
    this.isTicketTest = true;
  }

}
