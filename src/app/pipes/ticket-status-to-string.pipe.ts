import { TicketStatusEnum } from './../types/ticket-status-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketStatusToString'
})
export class TicketStatusToStringPipe implements PipeTransform {

  transform(value: TicketStatusEnum): string {
    switch(value)
    {
      case TicketStatusEnum.Active: return "Активный";
      case TicketStatusEnum.Disabled: return "Выключен";
      default: return "Не заполнен";
    }
  }

}
