import { ITicketQuestionAnswer } from './iticket-question-answer';
import { QuestionStatusEnum } from './question-status-enum';
export interface IResult {
  QuestionText: string,
  Status: QuestionStatusEnum,
  UserAnswer: ITicketQuestionAnswer | null,
  Description:string,
  NeedShowDescription:boolean
}
