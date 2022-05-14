import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ]
})
export class CategoriesModule { }
