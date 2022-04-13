import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
Services:any
  constructor(private route:Router , private http:HttpService) {
    this.http.getallservices().subscribe(data => this.Services=data);
  }

  ngOnInit(): void {
  }
  servicedetail(id:any){
    this.route.navigate(['Services/'+id]);


  }
}
