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
    return false;
  }

  private mapQuestionsToResult():IResult[]{
    debugger
    this.questions;
    return [];
  }
}
