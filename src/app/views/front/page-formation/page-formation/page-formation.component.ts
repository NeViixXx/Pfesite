import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {

  id:any
  dataFormation:any


    constructor(private http:HttpService , private aroute:ActivatedRoute) {
      this.aroute.params.subscribe(data => this.id=data['id']);


    }

    ngOnInit(): void {
      this.http.getsignleformation(this.id).subscribe(data => this.dataFormation=data);


    }
}
