import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel.component';

const routes: Routes = [
  { path: '', component: AdminpanelComponent , children:[
    { path: 'commonsettings', loadChildren: () => import('./../adminpanel/components/dash-index/dash-index.module').then(m => m.DashIndexModule) },
    { path: 'newseditor', loadChildren: () => import('./../adminpanel/components/news-editor-page/news-editor-page.module').then(m => m.NewsEditorPageModule) },
    { path: 'abouteditor', loadChildren: () => import('./../adminpanel/components/about-editor-page/about-editor-page.module').then(m => m.AboutEditorPageModule) },
    { path: 'priceeditor', loadChildren: () => import('./../adminpanel/components/price-editor-page/price-editor-page.module').then(m => m.PriceEditorPageModule) },
    { path: 'informationeditor', loadChildren: () => import('./../adminpanel/components/information-editor-page/information-editor-page.module').then(m => m.InformationEditorPageModule) },
    { path: 'contacteditor', loadChildren: () => import('./../adminpanel/components/contact-editor-page/contact-editor-page.module').then(m => m.ContactEditorPageModule) },
    { path: 'pddreadereditor', loadChildren: () => import('./../adminpanel/components/pddreader-editor-page/pddreader-editor-page.module').then(m => m.PddreaderEditorPageModule) },
    { path: 'pddtesteditor', loadChildren: () => import('./../adminpanel/components/pddtest-editor-page/pddtest-editor-page.module').then(m => m.PddtestEditorPageModule) },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpanelRoutingModule { }
