import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageservicesComponent } from '../pageservices/pageservices.component';


const routes: Routes = [
  {path:'', component:PageservicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageServicesRoutingModule { }
