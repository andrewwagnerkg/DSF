import { AboutService } from './../../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent implements OnInit {

  public htmlContent:string = ""
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.htmlContent=this.aboutService.GetHtml();
  }

}
