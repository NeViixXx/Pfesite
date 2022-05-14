import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
dataadmin={
  Identifiant:''
}

helper = new JwtHelperService();

  constructor(private http:HttpClient) {

   }

   login(data:any)
{
  return this.http.post("http://localhost:1000/admin/login",data)
}

Savedata(token:any){

localStorage.setItem('token',token)

}

LoggedIn(){
  let token:any=localStorage.getItem('token')
  if(!token) {
    return false
  }
  let decodeToken=this.helper.decodeToken
  if(this.helper.isTokenExpired(token)){
      return false
  }
  return true
}

}
