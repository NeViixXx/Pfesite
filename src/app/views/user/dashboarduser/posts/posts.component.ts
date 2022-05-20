import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any
  dataPost={
    name:'',
    Description:'',
    Images:[],
    id:''
    }

  constructor(private http:HttpService) {
    this.http.getpost().subscribe(data => {this.posts=data

        })
   }


   getdata(name:string,Images:any,Description:string,id:any){
    this.dataPost.name=name
    this.dataPost.Images=Images
    this.dataPost.Description=Description
    this.dataPost.id=id
      }

  ngOnInit(): void {
  }

}
