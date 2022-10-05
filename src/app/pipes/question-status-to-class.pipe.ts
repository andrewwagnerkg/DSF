import { QuestionStatusEnum } from './../types/question-status-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionStatusToClass'
})
export class QuestionStatusToClassPipe implements PipeTransform {

  transform(value: QuestionStatusEnum): string {
    switch(value)
    {
      case QuestionStatusEnum.Current:
        return "card text-bg-info col";
      case QuestionStatusEnum.Answered:
        return "card text-bg-success col";
      case QuestionStatusEnum.Skiped:
        return "card text-bg-warning col";
      case QuestionStatusEnum.Danger:
        return "card text-bg-danger col";
      default:
        return "card text-bg-light col"
    }
  }

}
