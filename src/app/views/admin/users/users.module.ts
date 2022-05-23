import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllusersComponent } from './allusers/allusers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AllusersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
