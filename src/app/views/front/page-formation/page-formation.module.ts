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
    ReactiveFormsModule
  ]
})
export class PageFormationModule { }
