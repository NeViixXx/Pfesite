import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {

  constructor(private http:HttpService,private route : Router) { }

  ngOnInit(): void {
  }
  Addoffre(f:NgForm){
let data = f.value
this.http.addoffre(data).subscribe((data) => this.route.navigate(['admin/Offres']))

  }
}
