import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { CondidatComponent } from './condidat/condidat.component';
import { CondidatsoffreComponent } from './condidatsoffre/condidatsoffre.component';
import { OffresComponent } from './offres/offres.component';

const routes: Routes = [
  {path:'',component:OffresComponent},
  {path:'AjoutOffre',component:AddoffreComponent},
  {path:'Condidats',component:CondidatsoffreComponent},
  {path:'Condidats/:id',component:CondidatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
