import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PddtestComponent } from './pddtest.component';

const routes: Routes = [{ path: '', component: PddtestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PddtestRoutingModule { }
