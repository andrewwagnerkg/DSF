import { TicketStatusEnum } from './../types/ticket-status-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketStatusToButtonText'
})
export class TicketStatusToButtonTextPipe implements PipeTransform {

  transform(value: TicketStatusEnum): string {
    switch(value)
    {
      case TicketStatusEnum.Disabled: return "Включить";
      default: return "Выключить";
    }
  }

}
