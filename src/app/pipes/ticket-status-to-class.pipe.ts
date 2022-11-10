import { TicketStatusEnum } from './../types/ticket-status-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketStatusToClass'
})
export class TicketStatusToClassPipe implements PipeTransform {

  transform(value: TicketStatusEnum): string {
    switch(value)
    {
      case TicketStatusEnum.Active: return "badge text-bg-success";
      case TicketStatusEnum.Disabled: return "badge text-bg-warning";
      default: return "badge text-bg-danger";
    }
  }

}
