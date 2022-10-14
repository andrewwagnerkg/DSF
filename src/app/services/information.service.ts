import { Injectable } from '@angular/core';
import { IUserQuestion } from '../types/iuser-question';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private items:IUserQuestion[] = [
    {Id:1, Title:"Title1", Text:"text content ect1 loremsdfasdfasdfasdfasdfasdfasdf", IsDisabled:false},
    {Id:2, Title:"Title1", Text:"text content ect1 loremsdfasdfasdfasdfasdfasdfasdf", IsDisabled:false},
    {Id:3, Title:"Title1", Text:"text content ect1 loremsdfasdfasdfasdfasdfasdfasdf", IsDisabled:false},
  ];
  constructor() { }

  public CreateQuestion(item:IUserQuestion):void{
    item.Id = this.items.length + 1;
    this.items.push(item);
  }

  public GetQuestions(pageNumber:number, count:number):IUserQuestion[]{
    return this.items.filter(i=>!i.IsDisabled);
  }

  public ChangeStatusQuestion(item:IUserQuestion):void{
    item.IsDisabled=!item.IsDisabled;
    this.UpdateQuestion(item);
  }

  public UpdateQuestion(item:IUserQuestion):void{
    this.DeleteQuestion(item);
    this.items.push(item);
  }

  public DeleteQuestion(item:IUserQuestion):void{
    this.items = this.items.filter(i=>i.Id != item.Id);
  }
}
