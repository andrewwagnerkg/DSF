import { Ticket } from './../../../../types/ticket';
import { TicketListService } from './../../../../services/ticket-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  ticketList! : Ticket[]
  constructor(private ticketListService:TicketListService) { }

  ngOnInit(): void {
    this.ticketList = this.ticketListService.GetTicketList();
  }



}
