import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

getallcategory()
{
  return this.http.get("http://localhost:1000/category")

}
getallservices()
{
  return this.http.get("http://localhost:1000/Services")

}

getservice(id:any)
{
  return this.http.get(`http://localhost:1000/Services/${id}`)

}

getalloffres()
{
  return this.http.get("http://localhost:1000/Offre")

}

getformationcat(name:any)
{
  return this.http.get(`http://localhost:1000/Formation?category=${name}`)

}
getsignleformation(id:any)
{
  return this.http.get(`http://localhost:1000/Formation/${id}`)

}

}
