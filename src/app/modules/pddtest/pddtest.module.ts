import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddtestRoutingModule } from './pddtest-routing.module';
import { PddtestComponent } from './pddtest.component';


@NgModule({
  declarations: [
    PddtestComponent
  ],
  imports: [
    CommonModule,
    PddtestRoutingModule
  ]
})
export class PddtestModule { }
