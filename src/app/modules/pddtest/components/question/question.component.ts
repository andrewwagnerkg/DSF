import { ITicketQuestionAnswer } from './../../../../types/iticket-question-answer';
import { ITicketQuestion } from 'src/app/types/iticket-question';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question!:ITicketQuestion;
  @Output() answerEmitter = new EventEmitter<ITicketQuestionAnswer>();

  constructor() { }

  ngOnInit(): void {
  }

  public checkAnswer(answer:ITicketQuestionAnswer):void{
    this.answerEmitter.emit(answer);
  }

}
