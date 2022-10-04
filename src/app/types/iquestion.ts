import { IAnswer } from "./ianswer";
import { QuestionStatusEnum } from "./question-status-enum";

export interface IQuestion {
  Id:number,
  OrderedNumber:number,
  ImgUrl:string,
  Text:string,
  Answers:IAnswer[]
  Status:QuestionStatusEnum,
  Description:string
}
