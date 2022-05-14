import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/services/authadmin.service';
import { HttpService } from 'src/app/services/http.service';
declare var $: any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  Category : any
  name:any
  Identifiant:any
  constructor(private http : HttpService , private route:Router , private auth:AuthadminService) {

    this.http.getallcategory().subscribe(data => this.Category=data);
console.log(this.auth.LoggedIn())
  }



closenav(x:any){
  x=document.getElementById("wrapper")
  x.classList.toggle("toggled")
}
  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

  }

  logout(){
localStorage.removeItem('token')
this.route.navigate(['/admin/login'])
  }



}
