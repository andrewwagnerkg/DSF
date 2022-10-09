import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationEditorPageComponent } from './information-editor-page.component';

const routes: Routes = [{ path: '', component: InformationEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationEditorPageRoutingModule { }
