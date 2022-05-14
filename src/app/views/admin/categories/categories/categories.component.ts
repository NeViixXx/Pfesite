import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
Category : any

  constructor(private http : HttpService ) {
    this.http.getallcategory().subscribe(data => this.Category=data);
  }

  ngOnInit(): void {
  }

  delete(id:any,i:any){
    this.http.deletecategory(id).subscribe(Response => this.Category.splice(i,1));
  }

}
