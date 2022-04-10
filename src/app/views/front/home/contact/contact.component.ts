import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
dataArray: any
  constructor(private http : HttpService) {
    this.http.getallcategory().subscribe(data => this.dataArray=data);

  }

  ngOnInit(): void {
  }

}
