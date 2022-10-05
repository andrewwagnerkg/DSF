import { IAnswer } from './ianswer';
import { QuestionStatusEnum } from './question-status-enum';
export interface IResult {
  ImgUrl:string,
  QuestionText: string,
  Status: QuestionStatusEnum,
  UserAnswer: IAnswer | null,
  Description:string,
  NeedShowDescription:boolean
}
