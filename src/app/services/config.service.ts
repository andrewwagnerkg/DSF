import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../types/dto/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  public getCommonRequisites():Observable<Config>{
    return this.http.get<Config>('http://localhost:4200/assets/configapp.json')
      .pipe(map((data)=>{return new Config(data['companyName'], data['companyAddress'], data['companyPhone'], data['companyEmail'], data['companyWorktime'])}));
  }

  public getPDDurl():string{
    return '';
  }

}
