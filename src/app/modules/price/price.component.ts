import { PriceService } from './../../services/price.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  public html:string = "";
  constructor(private priceService:PriceService) { }

  ngOnInit(): void {
    this.html=this.priceService.GetHtml();
  }

}
