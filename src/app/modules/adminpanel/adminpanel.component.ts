import { ILoginModel } from './../../types/ilogin-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  public isLogin: boolean = false;
  public isLoginError: boolean = false;
  public token:string = ""
  constructor(private router:Router) {
   }

  ngOnInit(): void {

  }

public logout():void{
  //TODO logout
  this.isLogin = false;
  this.isLoginError = false;
  this.token="";
  //this.router.navigate(['/']);
}

public onTryLogin(loginModel:ILoginModel)
{
  this.isLogin = true;
  this.isLoginError = false;
  this.token="sdfsdfadf-sdfa-asdfa-asdf-asdf-q124-3asf3"
}

}
