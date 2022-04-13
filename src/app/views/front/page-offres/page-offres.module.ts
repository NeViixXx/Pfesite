import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOffresRoutingModule } from './page-offres-routing.module';
import { PageoffresComponent } from './pageoffres/pageoffres.component';


@NgModule({
  declarations: [
    PageoffresComponent
  ],
  imports: [
    CommonModule,
    PageOffresRoutingModule
  ]
})
export class PageOffresModule { }
