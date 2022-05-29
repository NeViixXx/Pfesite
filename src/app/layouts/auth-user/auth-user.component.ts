import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  id:any
  datarecive:any
  url:any
  user:any
  userprofile:any
  constructor(private auth:AuthuserService ,private route:Router , private aroute:ActivatedRoute,private toast:NgToastService) {
    this.url=this.aroute.snapshot.queryParams['returnUrl'] || '/user/'
    if (this.auth.LoggedIn()){
      this.route.navigate(['/user'])
    }



  }

  ngOnInit(): void {

  }

  loginuser(user:any) {
    let data = user.value
this.auth.login(data).subscribe(response =>
  {this.datarecive=response
    this.auth.Savedata(this.datarecive)
    this.route.navigate([this.url])
    .then(() => {
      window.location.reload();
    });
  },

  (err) => this.toast.error({detail:"Erreur",summary:'Vérifier vos informations', duration:3000}))

}

}
