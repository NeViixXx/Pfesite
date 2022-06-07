import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  img:any
id:any
register:any
verif=0
datarecive:any

    constructor(private http:HttpService ,private auth:AuthuserService , private route:Router, private fb:FormBuilder,private toast:NgToastService) {


      this.register = this.fb.group({
        email: ['', {
            validators: [
               Validators.required,
               Validators.email
            ]},],
            fname: ['', {
              validators: [
                 Validators.required
              ]},],
              lname: ['', {
                validators: [
                   Validators.required
                ]},],
              password: ['', {
                validators: [
                   Validators.required
                ]},],
                confpassword: ['', {
                  validators: [
                     Validators.required
                  ]},],
                birthdate: ['', {
                  validators: [
                     Validators.required,

                  ]},],
                  phonenum: ['', {
                    validators: [
                       Validators.required,
                       Validators.minLength(8),
                       Validators.maxLength(8),
                       Validators.pattern("[0-9 ]{8}")
                    ]},],
                    avatar: [''],


      });

    }


    get email() {
      return this.register.controls['email'];
  }

  get fname() {
      return this.register.controls['fname'];
  }

  get lname() {
    return this.register.controls['lname'];
}
  get namesoc() {
    return this.register.controls['namesoc'];
  }
  get adresse() {
    return this.register.controls['adresse'];
  }
  get phonenum() {
    return this.register.controls['phonenum'];
  }

  get password() {
    return this.register.controls['password'];
}

get confpassword() {
  return this.register.controls['confpassword'];
}

get birthdate() {
  return this.register.controls['birthdate'];
}


onFileSelected(event:any) {

  const reader = new FileReader();

  reader.onload = () => {
    if (reader.readyState === 2) {				this.img=reader.result;
    }
  };	reader.readAsDataURL(event.target.files[0]);
}


  add(){
    let data=this.register.value
    data.avatar=this.img
    if (data.password === data.confpassword)
{
    this.http.register(data).subscribe(resp =>  {
      this.route.navigate(['/login'])},
      (err) => this.toast.error({detail:"Erreur", duration:3000}))
  }
}
  ngOnInit(): void {
  }

}
