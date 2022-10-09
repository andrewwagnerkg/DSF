import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsEditorPageComponent } from './news-editor-page.component';

const routes: Routes = [{ path: '', component: NewsEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsEditorPageRoutingModule { }
