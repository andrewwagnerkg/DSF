import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private localStorage:string = "";
  constructor() { }

  public GetHtml():string{
    return this.localStorage;
  }

  public SetHtml(html:string):void{
    this.localStorage = html;
  }
}
