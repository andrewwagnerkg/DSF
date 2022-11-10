import { ITicketQuestionAnswer } from './iticket-question-answer';
import { QuestionStatusEnum } from './question-status-enum';
export interface ITicketQuestion {
  Id:number,
  isFromFront:boolean,
  LastUpdate:Date,
  Isactive:boolean,
  Text:string,
  Answers:ITicketQuestionAnswer[]
  OrderedNumber:number,
  Status:QuestionStatusEnum,
  Description:string
}
