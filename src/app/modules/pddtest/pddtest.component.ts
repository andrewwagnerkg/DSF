import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pddtest',
  templateUrl: './pddtest.component.html',
  styleUrls: ['./pddtest.component.scss']
})
export class PddtestComponent implements OnInit {

  public isTest : boolean = false;
  public isTicketTest : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onTicketSelect(tiketId: number) : void{
    //получить список вопросов по id билета возможно асинхронно
    this.isTest = true;
    this.isTicketTest = true;
  }

  public testBackButtonClick():void{
    this.isTest = false;
    this.isTicketTest = false;
  }

}
