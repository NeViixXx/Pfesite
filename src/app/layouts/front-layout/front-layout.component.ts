
import { Component, OnInit,HostListener, HostBinding , Directive, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';

import { HttpService } from 'src/app/services/http.service';





declare const navbar: any;

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
Services : any
Category : any
Logged : boolean = false;
user:any
navbarfixed:any
userprofile:any

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }


  constructor(private http : HttpService , private route:Router , private userdata:AuthuserService  ) {
    this.http.getallcategory().subscribe(data => this.Category=data);

this.Logged=this.userdata.LoggedIn()
    this.userdata.getprofile().subscribe(data => {
      this.userprofile=data
    })


    this.http.getallservices().subscribe(data => this.Services=data);



  }

  logout(){
    localStorage.removeItem('usertoken')
    localStorage.removeItem('user')
    location.reload();
      }



  ngOnInit(): void {

  }





    }

