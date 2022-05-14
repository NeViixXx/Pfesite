import { Component, Input, OnInit } from '@angular/core';
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
tab:any


  constructor(private http:HttpService , private aroute:ActivatedRoute) {
    this.aroute.params.subscribe(data => this.id=data['id']);
    this.http.getservice(this.id).subscribe(data => {
      this.dataService=data;
      this.tab=this.dataService.Caracteristique
      console.log(this.tab);




       });


  }



  ngOnInit(): void {


  }




  }

