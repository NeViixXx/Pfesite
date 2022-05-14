import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations/formations.component';
import { AddformationComponent } from './addformation/addformation.component';
import { EditformationComponent } from './editformation/editformation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormationsComponent,
    AddformationComponent,
    EditformationComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormationsModule { }
