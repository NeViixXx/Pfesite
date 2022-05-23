import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';
import { HttpService } from 'src/app/services/http.service';
declare var $: any;



@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  Services : any
  Category : any
userprofile:any

  navbarfixed:boolean = false;
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

  constructor(private route:Router , private http:HttpService , private userdata:AuthuserService) {
    this.userdata.getprofile().subscribe(data => {
      this.userprofile=data
    })
    this.http.getallcategory().subscribe(data => this.Category=data);


    this.http.getallservices().subscribe(data => this.Services=data);


  }



  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
};







  logout(){
    localStorage.removeItem('usertoken')
    localStorage.removeItem('user')
    this.route.navigate(['/'])
      }


}
