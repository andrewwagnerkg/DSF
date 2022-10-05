import { IQuestion } from './../../types/iquestion';
import { Component, OnInit } from '@angular/core';
import { QuestionStatusEnum } from 'src/app/types/question-status-enum';

@Component({
  selector: 'app-pddtest',
  templateUrl: './pddtest.component.html',
  styleUrls: ['./pddtest.component.scss']
})
export class PddtestComponent implements OnInit {

  public isTest : boolean = false;
  public isTicketTest : boolean = false;
  public questions!:IQuestion[];

  constructor() { }

  ngOnInit(): void {
    this.questions = [
      {Id:1, OrderedNumber:1, ImgUrl:"https://femtoice.com/img/03_02_cd.jpg3", Text:"Что такое дорога?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:22, OrderedNumber:2, ImgUrl:"", Text:"Что такое дорога 2?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:3, OrderedNumber:3, ImgUrl:"", Text:"Что такое дорога 3?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:14, OrderedNumber:4, ImgUrl:"", Text:"Что такое дорога 4?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:15, OrderedNumber:5, ImgUrl:"", Text:"Что такое дорога 5?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:63, OrderedNumber:6, ImgUrl:"", Text:"Что такое дорога?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:71, OrderedNumber:7, ImgUrl:"", Text:"Что такое дорога 2?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:83, OrderedNumber:8, ImgUrl:"", Text:"Что такое дорога 3?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:19, OrderedNumber:9, ImgUrl:"", Text:"Что такое дорога 4?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"},
      {Id:102, OrderedNumber:10, ImgUrl:"", Text:"Что такое дорога 5?", Status:QuestionStatusEnum.New, Answers:
      [
        {Id:1, AnswerText:"Полоса земли", IsSuccess:false, IsUserAnswer:false},
        {Id:2, AnswerText:"Полоса земли 2", IsSuccess:false, IsUserAnswer:false},
        {Id:3, AnswerText:"Полоса земли 3", IsSuccess:false, IsUserAnswer:false},
        {Id:4, AnswerText:"Полоса земли 4", IsSuccess:true, IsUserAnswer:false}
      ], Description:"Ghfdbkmysq jndtn njn nj njn nj"}
    ];
  }

  public onTicketSelect(tiketId: number) : void{
    //получить список вопросов по id билета возможно асинхронно
    this.isTest = true;
    this.isTicketTest = true;
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
