import { ITicketQuestion } from 'src/app/types/iticket-question';
import { TicketStatusEnum } from './ticket-status-enum';
export interface Ticket {
  Id:number,
  Label:string,
  Status: TicketStatusEnum,
  LastEdit: Date,
  Questions:ITicketQuestion[]
}
