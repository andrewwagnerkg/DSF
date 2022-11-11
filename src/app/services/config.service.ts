import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Config } from '../types/dto/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  public getCommonRequisites():Observable<Config>{
    return this.http.get<Config>('http://localhost:4200/assets/configapp.json').pipe(map((data)=>{return new Config(data['companyName'], data['companyAddress'], data['companyPhone'], data['companyEmail'], data['companyWorktime'])}));
    //return { companyName:"ДОСААФ ОСТО", companyAddress:"г.Бишкек ​Ботанический переулок, 1/1", companyPhone:"(312) 545402", companyEmail:"rshtosto@mail.ru", companyWorktime:"Пн - Пт 08:00 - 18:00 12:00 - 13:00 Обед"};
  }

  public getPDDurl():string{
    return '';
  }

}
