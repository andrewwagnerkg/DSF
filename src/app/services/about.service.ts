import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  private localStorage:string = "";

  public GetHtml():string{
    return this.localStorage;
  }

  public SetHtml(html:string):void{
    this.localStorage = html;
  }
}
