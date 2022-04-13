import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
Services : any
Category : any


  constructor(private http : HttpService , private route:Router) {
    this.http.getallcategory().subscribe(data => this.Category=data);


    this.http.getallservices().subscribe(data => this.Services=data);

  }

  ngOnInit(): void {

  }

}
