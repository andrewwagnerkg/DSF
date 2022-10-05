import { QuestionStatusEnum } from './../../../../types/question-status-enum';
import { IQuestion } from './../../../../types/iquestion';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IAnswer } from 'src/app/types/ianswer';

@Component({
  selector: 'app-pdd-test',
  templateUrl: './pdd-test.component.html',
  styleUrls: ['./pdd-test.component.scss']
})
export class PddTestComponent implements OnInit {

  @Input() isTicketTest: boolean = false;
  @Output() onBackButtonClick = new EventEmitter<void>();
  @Input() public questions!:IQuestion[];
  public currentQuestion! : IQuestion;
  private canApplyAnswer: boolean = false;
  public isShowTest: boolean = true;
  public isShowResult: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.setCurrentQuestion(this.questions[0]);
  }

  private setCurrentQuestion(question:IQuestion):void{
    this.currentQuestion = question;
    this.currentQuestion.Status = QuestionStatusEnum.Current;
  }

  private setStatusToCurrentQuestion(status:QuestionStatusEnum):void{
    this.currentQuestion.Status = status;
  }


  public backButtonClick(): void{
    this.onBackButtonClick.emit();
  }

  public onExpireTime(): void{
    this.setTestFinish();
  }

  public GoToQuestion(newQuestion: IQuestion):void{
    if(newQuestion.Status == QuestionStatusEnum.Answered || newQuestion.Status == QuestionStatusEnum.Current) return;
    this.setStatusToCurrentQuestion(QuestionStatusEnum.Skiped);
    this.setCurrentQuestion(newQuestion);
  }

  public applyAnswer():void{
    if(!this.canApplyAnswer) return;
    this.setStatusToCurrentQuestion(QuestionStatusEnum.Answered);
    this.currentQuestion = this.questions.filter((q,i)=>q.Status == QuestionStatusEnum.New || q.Status == QuestionStatusEnum.Skiped).sort((a,b)=>a.Status - b.Status)[0];
    if(this.checkTestFinish()) this.setTestFinish();
    this.setStatusToCurrentQuestion(QuestionStatusEnum.Current);
    this.canApplyAnswer = false;
  }

  public nextAvaliableQuestion():void{
    this.setStatusToCurrentQuestion(QuestionStatusEnum.Skiped);
    this.currentQuestion = this.questions.filter((q,i)=>q.Status == QuestionStatusEnum.New || q.Status == QuestionStatusEnum.Skiped).sort((a,b)=>a.Status - b.Status)[0];
    this.setStatusToCurrentQuestion(QuestionStatusEnum.Current);
  }

  public onAnswer(answer:IAnswer):void{
    this.currentQuestion.Answers.filter((a)=>a.Id == answer.Id).forEach((a)=>a.IsUserAnswer = true);
    this.canApplyAnswer = true;
  }

  private checkTestFinish():boolean{
    return this.currentQuestion === undefined;
  }

  private setTestFinish():void{
    this.isShowTest = false;
    this.isShowResult = true;
  }
}
