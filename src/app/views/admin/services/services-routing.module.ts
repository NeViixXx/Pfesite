import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddserviceComponent } from './addservice/addservice.component';
import { EditserviceComponent } from './editservice/editservice.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',component:ServicesComponent},
  {path:'AjoutService',component:AddserviceComponent},
  {path:'edit/:id',component:EditserviceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
