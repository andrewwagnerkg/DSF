import { ITicketQuestion } from './../types/iticket-question';
import { Injectable } from '@angular/core';
import { QuestionStatusEnum } from '../types/question-status-enum';

@Injectable({
  providedIn: 'root'
})
export class PddTestQuestionService {

  constructor() { }

private storage:ITicketQuestion[] = [
  {Id:12, Isactive: true, Text:'Что такое дорога', LastUpdate: new Date, Answers:[
    {Id:1, Text:"Полоса земли предназначенная для проезда", IsRight: true, IsUserAnswer: false, IsSuccess: false},
    {Id:45, IsRight: false, Text:"Там где можно проехать", IsUserAnswer: false, IsSuccess: false}
  ], isFromFront:false, Description:"", OrderedNumber:1, Status: QuestionStatusEnum.New},

  {Id:34, Isactive: false, Text:'Тестовый вопрос', LastUpdate: new Date, Answers:[
    {Id:123, Text:"редназначенная для проезда", IsRight: true, IsUserAnswer:false, IsSuccess: false}
  ], isFromFront:false, Description:"", OrderedNumber:1, Status: QuestionStatusEnum.New}
];

  public GetQuestionsByTicketId(TicketId:number):ITicketQuestion[]{
    return this.storage;
  }

  public getEmptyQuestion():ITicketQuestion{
    return {Id:-1, Isactive: true, LastUpdate: new Date, Text:"", Answers:[], isFromFront:true, Description:"", OrderedNumber:0, Status: QuestionStatusEnum.New};
  }

  public addQuestionToTicket(ticketId: number, question:ITicketQuestion):void{
    if(question.isFromFront)
      this.AddNewQuestionToTicket(ticketId,question);
    else
      this.EditQuestion(question);
  }

  private EditQuestion(question: ITicketQuestion):void {
    this.storage = this.storage.filter(q=>q.Id != question.Id);
    this.storage.push(question);
  }

  private AddNewQuestionToTicket(ticketId: number, question: ITicketQuestion):void {
    question.isFromFront = false;
    question.Id = this.storage.length+1;
    this.storage.push(question);
  }
}




