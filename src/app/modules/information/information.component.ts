import { IuserQuestionMessage } from './../../types/iuser-question-message';
import { InformationService } from './../../services/information.service';
import { IUserQuestion } from './../../types/iuser-question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  public items!:IUserQuestion[];
  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
    //TODO вынести в сервис
    this.items = this.informationService.GetQuestions(1,50);
  }

  public onSendQuestion(question:IuserQuestionMessage):void{
    this.informationService.AddQuestionMessage(question);
  }

}
