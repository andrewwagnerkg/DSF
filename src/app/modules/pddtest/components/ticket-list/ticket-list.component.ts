import { Ticket } from './../../../../types/ticket';
import { TicketListService } from './../../../../services/ticket-list.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  ticketList! : Ticket[]
  @Output() selectedTicket = new EventEmitter<Ticket>();

  constructor(private ticketListService:TicketListService) { }

  ngOnInit(): void {
    this.ticketList = this.ticketListService.GetTicketList();
  }

  public SelectTicket(ticket : Ticket)
  {
    this.selectedTicket.emit(ticket);
  }
}
