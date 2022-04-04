import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarduserRoutingModule } from './dashboarduser-routing.module';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';


@NgModule({
  declarations: [
    DashboarduserComponent
  ],
  imports: [
    CommonModule,
    DashboarduserRoutingModule
  ]
})
export class DashboarduserModule { }
