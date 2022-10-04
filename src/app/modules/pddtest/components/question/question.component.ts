import { IQuestion } from './../../../../types/iquestion';
import { IAnswer } from './../../../../types/ianswer';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question!:IQuestion;
  @Output() answerEmitter = new EventEmitter<IAnswer>();

  constructor() { }

  ngOnInit(): void {
  }

  public checkAnswer(answer:IAnswer):void{
    this.answerEmitter.emit(answer);
  }

}
