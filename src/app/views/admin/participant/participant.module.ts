import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { PartiformComponent } from './partiform/partiform.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ParticipantComponent,
    PartiformComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    NgxPaginationModule
  ]
})
export class ParticipantModule { }
