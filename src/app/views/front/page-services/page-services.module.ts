import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { PageServicesRoutingModule } from './page-services-routing.module';
import { PageservicesComponent } from '../pageservices/pageservices.component';


@NgModule({
  declarations: [
    PageservicesComponent
  ],
  imports: [
    CommonModule,
    PageServicesRoutingModule,
    BrowserModule
  ]
})
export class PageServicesModule { }
