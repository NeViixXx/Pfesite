import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  Offres : any
  constructor(private http:HttpService,private aroute:ActivatedRoute) {
    this.http.getalloffres().subscribe(data => this.Offres=data);


  }

  ngOnInit(): void {
  }

}

