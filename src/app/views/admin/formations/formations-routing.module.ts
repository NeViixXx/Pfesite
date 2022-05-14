import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformationComponent } from './addformation/addformation.component';
import { EditformationComponent } from './editformation/editformation.component';
import { FormationsComponent } from './formations/formations.component';

const routes: Routes = [
  {path:'',component:FormationsComponent},
  {path:'AjoutFormation',component:AddformationComponent},
  {path:'edit/:id',component:EditformationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
