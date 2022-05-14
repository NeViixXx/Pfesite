import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  name:any
  cat:any

  constructor(private http:HttpService , private aroute:ActivatedRoute ) {
    this.aroute.params.subscribe(data => this.name=data['name']);

    this.http.getformationcat(this.name).subscribe(form => {this.cat=form
       });
  }

  delete(id:any,i:any){
    this.http.deleteformation(id).subscribe(Response => this.cat.splice(i,1));
  }

  ngOnInit(): void {

  }
}
