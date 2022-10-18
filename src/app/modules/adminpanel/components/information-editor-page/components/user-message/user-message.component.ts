import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { IUserQuestion } from 'src/app/types/iuser-question';
import { IuserQuestionMessage } from 'src/app/types/iuser-question-message';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})

export class UserMessageComponent implements OnInit {


  @Input() item!:IuserQuestionMessage;
  @Output() onQuestionAdded = new EventEmitter();

  public currentQuestionItem: IUserQuestion={Id:0, IsDisabled:false, Text:'', Title:''};
  private currentMessageItem!: IuserQuestionMessage;
  public isEditMessageItem: boolean = false;

  constructor(private informationService:InformationService) { }

  ngOnInit(): void {
  }

  public onDelete(item:IuserQuestionMessage):void{
    item.IsReadead = true;
    this.informationService.EditUserQuestionsMessage(item);
    this.onQuestionAdded.emit();
  }

  public onAnswer(item:IuserQuestionMessage):void{
    this.currentMessageItem = item;
    this.currentQuestionItem = this.MapUserMessageToQuestion(item);
    this.isEditMessageItem=true;
  }

  public onBackEdit():void{
    this.isEditMessageItem=false;
  }

  private MapUserMessageToQuestion(message:IuserQuestionMessage):IUserQuestion{
    return {Id:0, IsDisabled:false, Title:message.Message, Text:''};
  }

  public AddQuestion(item:IUserQuestion):void{
    this.informationService.CreateQuestion(item);
    this.currentMessageItem.IsReadead = true;
    this.informationService.EditUserQuestionsMessage(this.currentMessageItem);
    this.onQuestionAdded.emit();
  }

}
