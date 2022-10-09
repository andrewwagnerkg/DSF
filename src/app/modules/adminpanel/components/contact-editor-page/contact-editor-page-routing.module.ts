import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditorPageComponent } from './contact-editor-page.component';

const routes: Routes = [{ path: '', component: ContactEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactEditorPageRoutingModule { }
