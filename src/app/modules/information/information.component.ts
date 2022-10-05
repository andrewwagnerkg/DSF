import { IUserQuestion } from './../../types/iuser-question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  public items!:IUserQuestion[];
  constructor() { }

  ngOnInit(): void {
    //TODO вынести в сервис
    this.items = [
      {Id:1, Title:"Title", Text:"text content ect"},
      {Id:2, Title:"Title2", Text:"text content ect2"},
    ];
  }

}
