import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOffresRoutingModule } from './page-offres-routing.module';
import { PageoffresComponent } from './pageoffres/pageoffres.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CondidiatureComponent } from './condidiature/condidiature.component';




@NgModule({
  declarations: [
    PageoffresComponent,
    CondidiatureComponent,


  ],
  imports: [
    CommonModule,
    PageOffresRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule

  ]
})
export class PageOffresModule { }
