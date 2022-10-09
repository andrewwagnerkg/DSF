import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PddreaderEditorPageComponent } from './pddreader-editor-page.component';

const routes: Routes = [{ path: '', component: PddreaderEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PddreaderEditorPageRoutingModule { }
