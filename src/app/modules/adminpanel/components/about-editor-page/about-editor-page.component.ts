import { AboutService } from './../../../../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-editor-page',
  templateUrl: './about-editor-page.component.html',
  styleUrls: ['./about-editor-page.component.scss']
})
export class AboutEditorPageComponent implements OnInit {

  public html:string = "";
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.html = this.aboutService.GetHtml();
  }

public onChangeContent(html:string):void{
  this.aboutService.SetHtml(html);
}

}
