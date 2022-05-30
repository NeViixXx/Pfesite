import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/services/authadmin.service';


@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css']
})
export class AuthAdminComponent implements OnInit {
id:any
datarecive:any
url:any
  constructor(private auth:AuthadminService ,private route:Router , private aroute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.url=this.aroute.snapshot.queryParams['returnUrl'] || '/admin/'
    if (this.auth.LoggedIn()){
        this.route.navigate(['/admin'])
    }
  }
loginadmin(admin:any){
let data = admin.value
this.auth.login(data).subscribe(response =>
  {this.datarecive=response
    this.auth.Savedata(this.datarecive.token)
    this.route.navigate([this.url])
  }
, err=> console.log(err))
}
}

