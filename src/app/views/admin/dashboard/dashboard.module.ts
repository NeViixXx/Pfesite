import { NgToastModule } from 'ng-angular-popup';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';
import { NgModel, FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    DashboardComponent,
    UpdatepassComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgToastModule
  ]
})
export class DashboardModule { }
