import { TicketStatusEnum } from './../types/ticket-status-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketStatusToAlertClass'
})
export class TicketStatusToAlertClassPipe implements PipeTransform {

  transform(value: TicketStatusEnum): string {
    switch(value)
    {
      case TicketStatusEnum.Active: return "alert alert-success";
      case TicketStatusEnum.Disabled: return "alert alert-warning";
      default: return "alert alert-danger";
    }
  }

}
