import { Ticket } from './../../../../types/ticket';
import { Component, OnInit } from '@angular/core';
import { TicketStatusEnum } from 'src/app/types/ticket-status-enum';
import { TicketListService } from 'src/app/services/ticket-list.service';

@Component({
  selector: 'app-pddtest-editor-page',
  templateUrl: './pddtest-editor-page.component.html',
  styleUrls: ['./pddtest-editor-page.component.scss']
})
export class PddtestEditorPageComponent implements OnInit {

  public isShowTicketList:boolean = true;
  public isShowTicketAdd:boolean = false;
  public isShowAddButton:boolean = true;
  public curentTicket!: Ticket;
  public tickets:Ticket[] = [];

  constructor(private ticketService:TicketListService) {

  }

  ngOnInit(): void {
    this.tickets = this.ticketService.GetTicketList();
  }

  public addTicketchangeState(): void{
    this.isShowTicketList = false;
    this.isShowAddButton = false;
    this.isShowTicketAdd = true;
    this.curentTicket = this.getEmptyTicket();
  }

  public editTicketStateChange():void{
    this.isShowTicketList = true;
    this.isShowAddButton = false;
    this.isShowTicketAdd = false;
  }

  private getEmptyTicket(): Ticket{
    return {Id:-1, Label:'', LastEdit: new Date, Status:TicketStatusEnum.Error, Questions:[]};
  }

  public cancelNewTicket():void{
    this.isShowTicketList = true;
    this.isShowAddButton = true;
    this.isShowTicketAdd = false;
  }

  public saveNewTicket(ticket:Ticket):void{
    this.isShowTicketList = true;
    this.isShowAddButton = true;
    this.isShowTicketAdd = false;
    this.ticketService.AddTicket(ticket);
    this.tickets = this.ticketService.GetTicketList();
  }

  public cancelEditTicket(){
    this.isShowTicketList = true;
    this.isShowAddButton = true;
    this.isShowTicketAdd = false;
  }

  public saveChangedTicket(ticket:Ticket):void{
    debugger
    this.isShowTicketList = true;
    this.isShowAddButton = true;
    this.isShowTicketAdd = false;
    this.ticketService.EditTicket(ticket);
    this.tickets = this.ticketService.GetTicketList();
  }

  public deleteTicket(ticket:Ticket):void{
    this.ticketService.DeleteTicket(ticket);
    this.tickets = this.ticketService.GetTicketList();
  }
}
