import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-offresuser',
  templateUrl: './offresuser.component.html',
  styleUrls: ['./offresuser.component.css']
})
export class OffresuserComponent implements OnInit {
Offres:any
emailuser:any
offreuser:any
page = 4;
pageSize= 10;
  constructor(private user:AuthuserService) {
    this.user.getprofile().subscribe(data => {
      this.emailuser=data
      this.user.offres(this.emailuser).subscribe(data => {
      this.offreuser=data});
    })


  }

  ngOnInit(): void {
  }

}
