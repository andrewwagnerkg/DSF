import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogonameComponent } from './components/logoname/logoname.component';
import { ImagetextComponent } from './components/imagetext/imagetext.component';
import { HomepageModule } from './modules/homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LogonameComponent,
    ImagetextComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    AppRoutingModule,
    HomepageModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LogonameComponent,
    ImagetextComponent
  ]
})
export class AppModule { }
