import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  token:any=localStorage.getItem('usertoken')
headerUser= new HttpHeaders()
.set('Authorization',`Bearer ${this.token}`)
  datauser={
    Identifiant:''
  }





  helper = new JwtHelperService();




  constructor(private http:HttpClient) { }





  login(data:any)
  {
    return this.http.post("http://localhost:1000/user/login",data)
  }

  Savedata(data:any){

  localStorage.setItem('usertoken',data.token)
  localStorage.setItem('user',JSON.stringify(data.user))

  }

  getdata(data:any){
    return localStorage.getItem('user')

  }

getprofile(){

  return this.http.get("http://localhost:1000/user/profile",{headers:this.headerUser})
}

updateprofile(data:any){
  return this.http.put("http://localhost:1000/user/profile",data,{headers:this.headerUser})
}

offres(data:any){
  return this.http.post("http://localhost:1000/Offre/Mesoffres",data,{headers:this.headerUser})
}

participer(data:any){
  return this.http.post("http://localhost:1000/formation/Participations",data,{headers:this.headerUser})
}

  LoggedIn(){
    let token:any=localStorage.getItem('usertoken')
    if(!token) {
      return false
    }

    if(this.helper.isTokenExpired(token)){
        return false
    }
    return true
  }
}
