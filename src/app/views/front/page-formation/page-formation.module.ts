import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFormationRoutingModule } from './page-formation-routing.module';
import { PageFormationComponent } from './page-formation/page-formation.component';
import { FormationsComponent } from './formations/formations.component';


@NgModule({
  declarations: [
    PageFormationComponent,
    FormationsComponent
  ],
  imports: [
    CommonModule,
    PageFormationRoutingModule
  ]
})
export class PageFormationModule { }
