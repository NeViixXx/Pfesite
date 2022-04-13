import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-pageservices',
  templateUrl: './pageservices.component.html',
  styleUrls: ['./pageservices.component.css']
})
export class PageservicesComponent implements OnInit {
id:any
dataService:any
Image:any;


  constructor(private http:HttpService , private aroute:ActivatedRoute) {
    this.aroute.params.subscribe(data => this.id=data['id']);


  }

  ngOnInit(): void {
    this.http.getservice(this.id).subscribe(data => this.dataService=data);
Image=this.dataService.Image

  }

}
