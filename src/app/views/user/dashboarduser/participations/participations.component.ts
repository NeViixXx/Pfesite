import { Component, OnInit } from '@angular/core';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-participations',
  templateUrl: './participations.component.html',
  styleUrls: ['./participations.component.css']
})
export class ParticipationsComponent implements OnInit {
  Offres:any
  emailuser:any
  offreuser:any
    constructor(private user:AuthuserService) {
      this.user.getprofile().subscribe(data => {
        this.emailuser=data
        this.user.participer(this.emailuser).subscribe(data => {
        this.offreuser=data});
      })


    }

  ngOnInit(): void {
  }

}
