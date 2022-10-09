import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceEditorPageComponent } from './price-editor-page.component';

const routes: Routes = [{ path: '', component: PriceEditorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceEditorPageRoutingModule { }
