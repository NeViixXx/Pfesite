import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardadminGuard } from './guards/guardadmin.guard';
import { UserguardGuard } from './guards/userguard.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminComponent } from './layouts/auth-admin/auth-admin.component';
import { AuthUserComponent } from './layouts/auth-user/auth-user.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { RegisterComponent } from './layouts/register/register.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'Services/:id',loadChildren:()=>import('./views/front/page-services/page-services.module').then(m=>m.PageServicesModule)},
    {path:'Offres',loadChildren:()=>import('./views/front/page-offres/page-offres.module').then(m=>m.PageOffresModule)},
    {path:'Category/:name',loadChildren:()=>import('./views/front/page-formation/page-formation.module').then(m=>m.PageFormationModule)},
    {path:'register',component:RegisterComponent},
    {path:'login',component:AuthUserComponent},
  ]},



  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module')
    .then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module')
    .then(m=>m.DashboardModule)},
    {path:'Catégories',loadChildren:()=>import('./views/admin/categories/categories.module')
    .then(m=>m.CategoriesModule)},
    {path:'Services',loadChildren:()=>import('./views/admin/services/services.module')
    .then(m=>m.ServicesModule)},
    {path:'Formations/:name',loadChildren:()=>import('./views/admin/formations/formations.module')
    .then(m=>m.FormationsModule)},
    {path:'Offres',loadChildren:()=>import('./views/admin/offres/offres.module')
    .then(m=>m.OffresModule)},
    {path:'Participant',loadChildren:()=>import('./views/admin/participant/participant.module')
    .then(m=>m.ParticipantModule)},
    {path:'Posts',loadChildren:()=>import('./views/admin/posts/posts.module')
    .then(m=>m.PostsModule)},
    {path:'Users',loadChildren:()=>import('./views/admin/users/users.module')
    .then(m=>m.UsersModule)},



  ]},
  {path:'admin/login',component:AuthAdminComponent},


  {path:'user',component:UserLayoutComponent ,canActivate:[UserguardGuard], children:[
     {path:'',loadChildren:()=>import('./views/user/dashboarduser/dashboarduser.module')
  .then(m=>m.DashboarduserModule)},
  {path:'dashboard',loadChildren:()=>import('./views/user/dashboarduser/dashboarduser.module')
  .then(m=>m.DashboarduserModule)},
 ]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
