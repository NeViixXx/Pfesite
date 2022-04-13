import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { PageoffresComponent } from '../page-offres/pageoffres/pageoffres.component';
import { PageFormationComponent } from '../page-formation/page-formation/page-formation.component';
import { FormationsComponent } from '../page-formation/formations/formations.component';
import { PageservicesComponent } from '../pageservices/pageservices.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'About',component:AboutComponent},
  {path:'Offres',component:PageoffresComponent},
  {path:'Formation/:id',component:PageFormationComponent},
  {path:'Category/:name',component:FormationsComponent},
  {path:'Services/:id',component:PageservicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
