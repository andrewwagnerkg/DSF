import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule), pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./modules/aboutpage/aboutpage.module').then(m => m.AboutpageModule) },
  { path: 'pddreader', loadChildren: () => import('./modules/pddreader/pddreader.module').then(m => m.PddreaderModule) },
  { path: 'price', loadChildren: () => import('./modules/price/price.module').then(m => m.PriceModule) },
  { path: 'pddtest', loadChildren: () => import('./modules/pddtest/pddtest.module').then(m => m.PddtestModule) },
  { path: 'information', loadChildren: () => import('./modules/information/information.module').then(m => m.InformationModule) },
  { path: 'contacts', loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'adminpanel', loadChildren: () => import('./modules/adminpanel/adminpanel.module').then(m => m.AdminpanelModule) },
  { path: '**', loadChildren: () => import('./modules/notfoundpage/notfoundpage.module').then(m => m.NotfoundpageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
