import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';




@Component({
  selector: 'app-pageoffres',
  templateUrl: './pageoffres.component.html',
  styleUrls: ['./pageoffres.component.css']
})

export class PageoffresComponent implements OnInit {
Offres : any




  constructor(private http:HttpService) {
    this.http.getalloffres().subscribe(data => this.Offres=data);
  }

  ngOnInit(): void {
  }


}
