import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'',component:PostsComponent},
  {path:'ajout',component:AddpostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
