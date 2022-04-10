import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
