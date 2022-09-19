import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PddreaderRoutingModule } from './pddreader-routing.module';
import { PddreaderComponent } from './pddreader.component';


@NgModule({
  declarations: [
    PddreaderComponent
  ],
  imports: [
    CommonModule,
    PddreaderRoutingModule,
    PdfViewerModule
  ]
})
export class PddreaderModule { }
