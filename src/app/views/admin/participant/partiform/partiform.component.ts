import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-partiform',
  templateUrl: './partiform.component.html',
  styleUrls: ['./partiform.component.css']
})
export class PartiformComponent implements OnInit {
id:any
dataform:any
  constructor(private http:HttpService , private aroute:ActivatedRoute) {
    this.aroute.params.subscribe(data => this.id=data['id']);
    this.http.getsignleformation(this.id).subscribe(data => {console.log(data)
    this.dataform=data})
  }

  ngOnInit(): void {
  }

}
