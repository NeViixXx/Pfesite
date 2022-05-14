import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { PartiformComponent } from './partiform/partiform.component';


@NgModule({
  declarations: [
    ParticipantComponent,
    PartiformComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule
  ]
})
export class ParticipantModule { }
