import { Ticket } from './../../../../../../types/ticket';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TicketStatusEnum } from 'src/app/types/ticket-status-enum';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.scss']
})
export class TicketlistComponent implements OnInit {

public editTicketState: boolean = false;

@Input() public tickets: Ticket[] = [];

@Output() public onEditTicket:EventEmitter<void> = new EventEmitter<void>();
@Output() public saveChanges:EventEmitter<Ticket> = new EventEmitter<Ticket>();
@Output() public deleteTicket:EventEmitter<Ticket> = new EventEmitter<Ticket>();

public currentTicket:Ticket = {Id:-1, Label:'', LastEdit: new Date, Status:TicketStatusEnum.Error, Questions:[]};

  constructor() { }

  ngOnInit(): void {
  }

  public ChangeEditTicketState(ticket:Ticket):void{
    this.currentTicket = ticket;
    this.onEditTicket.emit();
    this.editTicketState = true;
  }

  public ResetEditTicketState() : void{
    this.editTicketState = false;
  }

  public DeleteTicket(ticket:Ticket):void{
    this.deleteTicket.emit(ticket);
  }

  public cancelEditTicket():void{
    this.editTicketState = false;
  }

  public saveChangesTicket(ticket: Ticket):void{
    debugger
    this.saveChanges.emit(ticket);
    this.editTicketState = false;
  }

  public changeStatus(ticket:Ticket):void{
    switch(ticket.Status)
    {
      case TicketStatusEnum.Active:
        ticket.Status = TicketStatusEnum.Disabled;
      break;
      case TicketStatusEnum.Disabled:
        ticket.Status = TicketStatusEnum.Active;
      break;
    }
    this.saveChanges.emit(ticket);
  }
}
