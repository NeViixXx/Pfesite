import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

getallcategory()
{
  return this.http.get("http://localhost:1000/api/category")
}

}
