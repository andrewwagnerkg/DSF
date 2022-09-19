import { ConfigService } from 'src/app/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pddreader',
  templateUrl: './pddreader.component.html',
  styleUrls: ['./pddreader.component.scss']
})
export class PddreaderComponent implements OnInit {

  doc!:string

  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
    this.doc=this.configService.getPDDurl();
  }

}
