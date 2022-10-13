import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price-editor-page',
  templateUrl: './price-editor-page.component.html',
  styleUrls: ['./price-editor-page.component.scss']
})
export class PriceEditorPageComponent implements OnInit {

  public html:string="";
  constructor(private priceService:PriceService) { }

  ngOnInit(): void {
    this.html = this.priceService.GetHtml();
  }


  public onChangeContent(html:string):void{
    this.priceService.SetHtml(html);
  }

}
