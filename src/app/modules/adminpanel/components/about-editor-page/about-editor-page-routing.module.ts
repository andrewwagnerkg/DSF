import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutEditorPageComponent } from './about-editor-page.component';

const routes: Routes = [{ path: '', component: AboutEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutEditorPageRoutingModule { }
