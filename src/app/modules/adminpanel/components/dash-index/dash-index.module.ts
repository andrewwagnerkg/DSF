import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashIndexRoutingModule } from './dash-index-routing.module';
import { DashIndexComponent } from './dash-index.component';


@NgModule({
  declarations: [
    DashIndexComponent
  ],
  imports: [
    CommonModule,
    DashIndexRoutingModule
  ]
})
export class DashIndexModule { }
