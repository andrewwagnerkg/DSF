import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpanelRoutingModule } from './adminpanel-routing.module';
import { AdminpanelComponent } from './adminpanel.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  providers:[FormBuilder],
  declarations: [
    AdminpanelComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminpanelRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminpanelModule { }
