import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditserviceComponent } from './editservice/editservice.component';


@NgModule({
  declarations: [
    ServicesComponent,
    AddserviceComponent,
    EditserviceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule { }
