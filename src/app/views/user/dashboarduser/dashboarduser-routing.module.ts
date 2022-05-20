import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { OffresComponent } from './offres/offres.component';
import { OffresuserComponent } from './offresuser/offresuser.component';
import { ParticipationsComponent } from './participations/participations.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:DashboarduserComponent},
  {path:'profile',component:ProfileComponent},
  {path:'offres',component:OffresComponent},
  {path:'offres/Mesoffres',component:OffresuserComponent},
  {path:'Participations',component:ParticipationsComponent},
  {path:'Posts',component:PostsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboarduserRoutingModule { }
