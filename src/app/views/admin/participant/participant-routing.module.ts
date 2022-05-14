import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './participant/participant.component';
import { PartiformComponent } from './partiform/partiform.component';

const routes: Routes = [
  {path:'',component:ParticipantComponent},
  {path:':id',component:PartiformComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
