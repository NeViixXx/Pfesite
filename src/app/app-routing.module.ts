import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'Services/:id',loadChildren:()=>import('./views/front/page-services/page-services.module').then(m=>m.PageServicesModule)},
    {path:'Offres',loadChildren:()=>import('./views/front/page-offres/page-offres.module').then(m=>m.PageOffresModule)},
    {path:'Category/:name',loadChildren:()=>import('./views/front/page-formation/page-formation.module').then(m=>m.PageFormationModule)},
  ]},



  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module')
    .then(m=>m.DashboardModule)}]},
  {path:'user',component:UserLayoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
