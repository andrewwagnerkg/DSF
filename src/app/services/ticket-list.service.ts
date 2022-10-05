import { Ticket } from './../types/ticket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketListService {

  constructor() { }

  public GetTicketList() : Ticket[]
  {
    return [
      {Id:1, Label:'Билет1'},
      {Id:2, Label:'Билет2'},
      {Id:3, Label:'Билет3'},
      {Id:4, Label:'Билет4'},
      {Id:5, Label:'Билет5'},
      {Id:5, Label:'Билет6'},
      {Id:5, Label:'Билет7'},
      {Id:5, Label:'Билет8'},
      {Id:5, Label:'Билет9'},
      {Id:5, Label:'Билет10'},
    ]
  }
}
