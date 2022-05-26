import { AuthadminService } from './../../services/authadmin.service';

import { Component, OnInit,HostListener, HostBinding , Directive, Inject, Renderer2 } from '@angular/core';

import { Route, Router } from '@angular/router';
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
adminlogged : boolean = false;
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


  constructor(private http : HttpService , private route:Router , private userdata:AuthuserService , private router:Router , private admin:AuthadminService ) {
    this.http.getallcategory().subscribe(data => this.Category=data);

this.Logged=this.userdata.LoggedIn()
if (this.Logged){
    this.userdata.getprofile().subscribe(data => {
      this.userprofile=data
    })}
this.adminlogged=this.admin.LoggedIn()


    this.http.getallservices().subscribe(data => this.Services=data);



  }

  logout(){
    localStorage.removeItem('usertoken')
    localStorage.removeItem('user')
    location.reload();
      }

toHome(){
 document.getElementById("home")?.scrollIntoView({behavior:"smooth"})

}

toAbout(){
  document.getElementById("about")?.scrollIntoView({behavior:"smooth"})

}

toServices(){
  document.getElementById("services")?.scrollIntoView({behavior:"smooth"})
}

toFormations(){
  document.getElementById("formations")?.scrollIntoView({behavior:"smooth"})
}

toContact(){
  document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
}

  ngOnInit(): void {

  }





    }

