import { CompanyrequisitesInterface } from './../types/companyrequisites';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getCommonRequisites():CompanyrequisitesInterface{
    return { companyName:"ДОСААФ ОСТО", companyAddress:"г.Бишкек ​Ботанический переулок, 1/1", companyPhone:"(312) 545402", companyEmail:"rshtosto@mail.ru", companyWorktime:"Пн - Пт 08:00 - 18:00 12:00 - 13:00 Обед"};
  }

  public getPDDurl():string{
    return 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
  }

}
