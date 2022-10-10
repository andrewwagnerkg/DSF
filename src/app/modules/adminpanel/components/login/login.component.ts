import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginModel } from 'src/app/types/ilogin-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public isLoginError!:boolean;
  @Output() public onLoginSignal = new EventEmitter<ILoginModel>();

  public loginForm:FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder) {
  }

  get _login() {
    return this.loginForm.get('login')
  }

  get _password() {
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }

  login():void{
    if(this.loginForm.valid)
      this.onLoginSignal.emit({ Login:String(this._login?.value), Password:String(this._password?.value)});
    else
      return;
  }


}
