import { IuserQuestionMessage } from 'src/app/types/iuser-question-message';
import { IUserQuestion } from 'src/app/types/iuser-question';
import { InformationService } from './../../../../services/information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-editor-page',
  templateUrl: './information-editor-page.component.html',
  styleUrls: ['./information-editor-page.component.scss']
})
export class InformationEditorPageComponent implements OnInit {

  public userQuestions:IuserQuestionMessage[]=[];
  public currentQuestionItem: IUserQuestion={Id:0, IsDisabled:false, Text:'', Title:''};
  public isEditMessageItem: boolean = false;

  public items:IUserQuestion[]=[];
  public isEditItem:boolean = false;
  public currentItem:IUserQuestion = {Id:0, IsDisabled:false, Text:'', Title:''};
  constructor(private informationService:InformationService) { }

  ngOnInit(): void {
    this.items = this.informationService.GetQuestions(1,10);
    this.userQuestions = this.informationService.GetUserQuestionsMessages(1,10);
  }

  public onEditClick(item:IUserQuestion):void{
    this.isEditItem = true;
    this.currentItem = item;
  }

  public onChangeStatusClick(item:IUserQuestion):void{
    this.informationService.ChangeStatusQuestion(item);
  }

  public onDeleteClick(item:IUserQuestion):void{
    this.informationService.DeleteQuestion(item);
    this.items = this.informationService.GetQuestions(1,10);
  }

  public onBackClick():void{
    this.isEditItem = false;
    this.currentItem = {Id:0, IsDisabled:false, Text:'', Title:''};
  }

  public SaveChanges(item:IUserQuestion):void{
    this.informationService.UpdateQuestion(item);
    this.items = this.informationService.GetQuestions(1,10);
  }

  public AddQuestion(item:IUserQuestion):void{
    this.informationService.CreateQuestion(item);
    this.items = this.informationService.GetQuestions(1,10);
  }

  public onDelete(item:IuserQuestionMessage):void{
    item.IsReadead = true;
    this.informationService.EditUserQuestionsMessage(item);
    this.userQuestions=this.informationService.GetUserQuestionsMessages(1,10);
  }

  public onAnswer(item:IuserQuestionMessage):void{
    this.currentQuestionItem = this.MapUserMessageToQuestion(item);
    this.isEditMessageItem=true;
  }

  public onBackEdit():void{
    this.isEditMessageItem=false;
  }

  private MapUserMessageToQuestion(message:IuserQuestionMessage):IUserQuestion{
    return {Id:0, IsDisabled:false, Title:message.Message, Text:''};
  }
}
