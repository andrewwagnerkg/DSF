import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PddtestEditorPageComponent } from './pddtest-editor-page.component';

const routes: Routes = [{ path: '', component: PddtestEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PddtestEditorPageRoutingModule { }
