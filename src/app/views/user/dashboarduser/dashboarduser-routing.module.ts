import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { OffresComponent } from './offres/offres.component';
import { OffresuserComponent } from './offresuser/offresuser.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:DashboarduserComponent},
  {path:'profile',component:ProfileComponent},
  {path:'offres',component:OffresComponent},
  {path:'offres/Mesoffres',component:OffresuserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboarduserRoutingModule { }
