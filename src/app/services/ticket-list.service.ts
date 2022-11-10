import { Ticket } from './../types/ticket';
import { Injectable } from '@angular/core';
import { TicketStatusEnum } from '../types/ticket-status-enum';
import { QuestionStatusEnum } from '../types/question-status-enum';

@Injectable({
  providedIn: 'root'
})
export class TicketListService {

  private storage : Ticket[] = [
    {Id:1, Label:'Билет1', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-01-10'), Questions:[
      {Id:31, OrderedNumber:1, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:32, OrderedNumber:2, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:33, OrderedNumber:3, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:34, OrderedNumber:4, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:35, OrderedNumber:5, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:36, OrderedNumber:6, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:56, OrderedNumber:7, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:24, OrderedNumber:8, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:12, OrderedNumber:9, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:67, OrderedNumber:10, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:313, OrderedNumber:11, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:312, OrderedNumber:12, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:3133, OrderedNumber:13, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:315, OrderedNumber:14, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:3153, OrderedNumber:15, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:31234, OrderedNumber:16, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:3123, OrderedNumber:17, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:31233, OrderedNumber:18, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:3123, OrderedNumber:19, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
      {Id:312358, OrderedNumber:20, Description:"", Isactive:true, isFromFront:false, LastUpdate: new Date, Status: QuestionStatusEnum.New, Text:"Что такое дорога", Answers:[
        {Id: 53, IsRight: true, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 1"},
        {Id: 54, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 2"},
        {Id: 55, IsRight: false, IsSuccess:true, IsUserAnswer:false, Text:"Ответ 3"},
      ]},
    ]},
    {Id:2, Label:'Билет2', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:3, Label:'Билет3', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:4, Label:'Билет4', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:5, Label:'Билет5', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:22, Label:'Билет6', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:53, Label:'Билет7', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:51, Label:'Билет8', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:54, Label:'Билет9', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
    {Id:56, Label:'Билет10', Status: TicketStatusEnum.Active, LastEdit: new Date('2021-10-10'), Questions:[]},
  ];
  constructor() { }

  public GetTicketList() : Ticket[]
  {
    return this.storage;
  }

  public GetAvaliableTicketList() : Ticket[]
  {
    return this.storage.filter(q=>q.Status == TicketStatusEnum.Active);
  }

  public DeleteTicket(ticket:Ticket):void{
    this.storage = this.storage.filter(x=>x.Id != ticket.Id);
  }

  public AddTicket(ticket:Ticket)
  {
    ticket.Id = this.storage.length + 1;
    this.storage.push(ticket);
  }

  public EditTicket(ticket:Ticket)
  {
    this.DeleteTicket(ticket);
    this.storage.push(ticket);
  }
}
