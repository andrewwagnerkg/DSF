import { QuestionStatusEnum } from './../../../../types/question-status-enum';
import { IResult } from './../../../../types/iresult';
import { IQuestion } from './../../../../types/iquestion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {


  @Input() questions!:IQuestion[]
  public isPassed: boolean = false;
  public results!:IResult[];

  constructor() { }

  ngOnInit(): void {
    this.isPassed = this.checkPassed();
    this.results = this.mapQuestionsToResult();
  }

  private checkPassed():boolean{
    return this.mapQuestionsToResult().filter((r)=>r.Status == QuestionStatusEnum.Danger).length <= 2;
  }

  private mapQuestionsToResult():IResult[]{
    return this.questions.map<IResult>((q,i)=>this.mapQuestionToResult(q));
  }

  private mapQuestionToResult(question: IQuestion):IResult{
    let userAnswer = question.Answers.find((a)=>a.IsUserAnswer) ?? null;
    let rightAnswer = question.Answers.find((a)=>a.IsSuccess) ?? null;
    let status:QuestionStatusEnum = userAnswer?.Id == rightAnswer?.Id ? QuestionStatusEnum.Answered : QuestionStatusEnum.Danger;
    return {Description:question.Description, ImgUrl:question.ImgUrl, QuestionText:question.Text, Status: status, UserAnswer: userAnswer, NeedShowDescription: status == QuestionStatusEnum.Danger};
  }
}
