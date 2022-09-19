import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PddreaderComponent } from './pddreader.component';

const routes: Routes = [{ path: '', component: PddreaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PddreaderRoutingModule { }
