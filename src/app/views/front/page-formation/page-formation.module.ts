import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFormationRoutingModule } from './page-formation-routing.module';
import { PageFormationComponent } from './page-formation/page-formation.component';
import { FormationsComponent } from './formations/formations.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageFormationComponent,
    FormationsComponent
  ],
  imports: [
    CommonModule,
    PageFormationRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgToastModule




  ]
})
export class PageFormationModule { }
