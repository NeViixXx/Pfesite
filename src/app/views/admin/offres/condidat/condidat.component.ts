import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {

  id:any
  dataoffre:any
    constructor(private http:HttpService , private aroute:ActivatedRoute) {
      this.aroute.params.subscribe(data => this.id=data['id']);
      this.http.getoneoffre(this.id).subscribe(data => {
      this.dataoffre=data})
    }
  ngOnInit(): void {
  }

}
