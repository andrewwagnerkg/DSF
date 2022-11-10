import { CompanyrequisitesInterface } from './../types/companyrequisites';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  public getCommonRequisites():Observable<any>{
    return this.http.get('http://localhost:4200/assets/configapp.json');
    //return { companyName:"ДОСААФ ОСТО", companyAddress:"г.Бишкек ​Ботанический переулок, 1/1", companyPhone:"(312) 545402", companyEmail:"rshtosto@mail.ru", companyWorktime:"Пн - Пт 08:00 - 18:00 12:00 - 13:00 Обед"};
  }

  public getPDDurl():string{
    return '';
  }

}
