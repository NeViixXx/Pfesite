import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
token:any=localStorage.getItem('token')
headerAdmin= new HttpHeaders()
.set('Authorization',`Bearer ${this.token}`)


  constructor(private http:HttpClient) { }

register(userdata:any){
  return this.http.post(`http://localhost:1000/user`,userdata)

}

getallcategory()
{
  return this.http.get("http://localhost:1000/category/")

}
addcategory(datacat:any)
{
  return this.http.post("http://localhost:1000/category/",datacat,{headers:this.headerAdmin})

}

deletecategory(id:any)
{
  return this.http.delete(`http://localhost:1000/category/`+id,{headers:this.headerAdmin})

}

getallservices()
{
  return this.http.get("http://localhost:1000/Services/")

}

getservice(id:any)
{
  return this.http.get(`http://localhost:1000/Services/${id}`)

}
addservice(data:any){
  return this.http.post("http://localhost:1000/Services/",data,{headers:this.headerAdmin})
}

deleteservice(id:any)
{
  return this.http.delete(`http://localhost:1000/Services/`+id,{headers:this.headerAdmin})

}
updateservice(id:any,service:any)
{
  return this.http.put(`http://localhost:1000/Services/`+id,service,{headers:this.headerAdmin})

}


getalloffres()
{
  return this.http.get("http://localhost:1000/Offre/")

}
getoneoffre(id:any)
{
  return this.http.get(`http://localhost:1000/Offre/`+id)
}

addoffre(data:any)
{
  return this.http.post("http://localhost:1000/Offre/",data,{headers:this.headerAdmin})

}

deleteoffre(id:any)
{
  return this.http.delete(`http://localhost:1000/Offre/`+id,{headers:this.headerAdmin})

}

updateoffre(data:any,id:any)
{
  return this.http.put(`http://localhost:1000/Offre/`+id,data,{headers:this.headerAdmin})

}

getallformations(){
  return this.http.get(`http://localhost:1000/Formation`)
}

getformationcat(name:any)
{
  return this.http.get(`http://localhost:1000/Formation?category=${name}`)

}
getsignleformation(id:any)
{
  return this.http.get(`http://localhost:1000/Formation/${id}`)

}
addformation(data:any){
  return this.http.post("http://localhost:1000/Formation/",data,{headers:this.headerAdmin})
}
updateformation(id:any,formation:any)
{
  return this.http.put(`http://localhost:1000/Formation/`+id,formation,{headers:this.headerAdmin})

}
deleteformation(id:any)
{
  return this.http.delete(`http://localhost:1000/Formation/`+id,{headers:this.headerAdmin})

}

getpost(){
  return this.http.get("http://localhost:1000/posts/")
}

addpost(data:any){
  return this.http.post("http://localhost:1000/posts/",data,{headers:this.headerAdmin})
}

deletepost(id:any)
{
  return this.http.delete(`http://localhost:1000/posts/`+id,{headers:this.headerAdmin})

}

updatepost(data:any,id:any)
{
  return this.http.put(`http://localhost:1000/posts/`+id,data,{headers:this.headerAdmin})

}


condidature(profil:any,id:any){
  return this.http.post(`http://localhost:1000/Offre/${id}/postuler`,profil)
}

participer(profil:any,id:any){
  return this.http.post(`http://localhost:1000/Formation/${id}`,profil)
}
contacter(profil:any){
  return this.http.post(`http://localhost:1000/Contact/`,profil)
}
}

