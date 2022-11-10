import { ITicketQuestion } from 'src/app/types/iticket-question';
import { PddTestQuestionService } from '../../../../../../services/pdd-test-question.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/types/ticket';
import { TicketStatusEnum } from 'src/app/types/ticket-status-enum';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss']
})
export class AddticketComponent implements OnInit {

  @Input() public ticket!:Ticket;
  @Output() public onsaveButtonClick = new EventEmitter<Ticket>();
  @Output() public onCancelButtonClick = new EventEmitter<void>();

  public canSaveTicket:boolean = false;
  public currentTicket!: Ticket;
  public questions:ITicketQuestion[] = [];
  public currentQuestion!:ITicketQuestion;

  public adQuestionState:boolean = false;

  constructor(private questionService: PddTestQuestionService) { }

  ngOnInit(): void {
      this.currentTicket = {...this.ticket};
      this.ChangeTicketState();
  }

  ChangeTicketState():void {
    if(this.currentTicket.Questions.length < 2
      || this.currentTicket.Label == '')
      this.currentTicket.Status = TicketStatusEnum.Error;
      else
      this.currentTicket.Status = TicketStatusEnum.Disabled;
      debugger
      this.canSaveTicket = this.currentTicket.Status != TicketStatusEnum.Disabled;
  }

  public get CountOfQuestions(): number{
    return this.currentTicket.Questions.length;
  }

  public onSaveTicketClick():void{
    debugger
    this.onsaveButtonClick.emit(this.currentTicket);
  }

public onAddQuestionClick():void{
  this.currentQuestion = this.questionService.getEmptyQuestion();
  this.adQuestionState = true;
}

public editQuestionClick(question:ITicketQuestion):void{
  this.currentQuestion = {...question};
  this.adQuestionState = true;
}

public cancelAddOrEditquestion():void{
  this.adQuestionState = false;
}

public onApplyAddOrEditQuestion(question:ITicketQuestion):void{
  this.adQuestionState = false;
  debugger
  if(question.Id < 0)
  {
    question.Id = this.currentTicket.Questions.length + 1;
    this.currentTicket.Questions.push(question);
  }
  else
  {
    this.currentTicket.Questions = this.currentTicket.Questions.filter(q=> q.Id != question.Id);
    this.currentTicket.Questions.push(question);
  }
  this.ChangeTicketState();
}

public onCancelTicketClick():void{
  this.onCancelButtonClick.emit();
}

}


