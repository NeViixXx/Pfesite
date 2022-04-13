import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  Category : any

  constructor(private http : HttpService) { }

  ngOnInit(): void {
    this.http.getallcategory().subscribe(data => this.Category=data);
  }


}
