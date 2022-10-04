import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpanelRoutingModule } from './adminpanel-routing.module';
import { AdminpanelComponent } from './adminpanel.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminpanelComponent
  ],
  imports: [
    CommonModule,
    AdminpanelRoutingModule
  ]
})
export class AdminpanelModule { }
