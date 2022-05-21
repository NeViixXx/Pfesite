import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarduserRoutingModule } from './dashboarduser-routing.module';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { ProfileComponent } from './profile/profile.component';

import { FormsModule } from '@angular/forms';
import { OffresComponent } from './offres/offres.component';

import { OffresuserComponent } from './offresuser/offresuser.component';
import { ParticipationsComponent } from './participations/participations.component';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';









@NgModule({
  declarations: [
    DashboarduserComponent,
    ProfileComponent,
    OffresComponent,
    OffresuserComponent,
    ParticipationsComponent,
    PostsComponent,




  ],
  imports: [
    CommonModule,
    DashboarduserRoutingModule,

    FormsModule,

    NgbModule,
    NgxPaginationModule


  ]
})
export class DashboarduserModule { }
