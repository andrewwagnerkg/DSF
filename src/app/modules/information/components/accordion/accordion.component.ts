import { Component, Input, OnInit } from '@angular/core';
import { IUserQuestion } from 'src/app/types/iuser-question';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {


  @Input() public items!: IUserQuestion[]
  constructor() { }

  ngOnInit(): void {
  }

}
