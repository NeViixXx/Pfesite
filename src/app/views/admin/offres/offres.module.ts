import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { OffresComponent } from './offres/offres.component';
import { FormsModule } from '@angular/forms';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { CondidatsoffreComponent } from './condidatsoffre/condidatsoffre.component';
import { CondidatComponent } from './condidat/condidat.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    OffresComponent,
    AddoffreComponent,
    CondidatsoffreComponent,
    CondidatComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class OffresModule { }
