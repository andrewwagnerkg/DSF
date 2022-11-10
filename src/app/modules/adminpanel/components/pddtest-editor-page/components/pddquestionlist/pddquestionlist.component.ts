import { ITicketQuestion } from './../../../../../../types/iticket-question';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pddquestionlist',
  templateUrl: './pddquestionlist.component.html',
  styleUrls: ['./pddquestionlist.component.scss']
})
export class PddquestionlistComponent implements OnInit {

  @Input() public questionList!:ITicketQuestion[];
  @Output() public editQuestionClickEvent:EventEmitter<ITicketQuestion> = new EventEmitter<ITicketQuestion>();

  constructor() { }

  ngOnInit(): void {
  }

  public editQuestionClick(question:ITicketQuestion, i:number):void{
    this.editQuestionClickEvent.emit(question);
  }

  public changeQuestionStatus(question:ITicketQuestion):void{

  }

  public deleteQuestion(question:ITicketQuestion):void{

  }
}
