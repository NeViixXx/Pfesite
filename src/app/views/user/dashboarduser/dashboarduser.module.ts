import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarduserRoutingModule } from './dashboarduser-routing.module';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { ProfileComponent } from './profile/profile.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { OffresComponent } from './offres/offres.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OffresuserComponent } from './offresuser/offresuser.component';






@NgModule({
  declarations: [
    DashboarduserComponent,
    ProfileComponent,
    OffresComponent,
    OffresuserComponent,


  ],
  imports: [
    CommonModule,
    DashboarduserRoutingModule,
    NzLayoutModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class DashboarduserModule { }
