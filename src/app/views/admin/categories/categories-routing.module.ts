import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path:'',component:CategoriesComponent},
  {path:'AjoutCategory',component:AddcategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
