import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';
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
    id:'',
    Comments:[]
    }
    imageUrl: string = '';
userprofile:any
singlepost:any
Comments: any[] =[]

  constructor(private http:HttpService , private userdata:AuthuserService , private router:Router) {
    this.http.getpost().subscribe(data => {this.posts=data
        })
        this.userdata.getprofile().subscribe(data => {
          this.userprofile=data
        })

   }




   getdata(name:string,Images:any,Description:string,id:any,Comments:any){
    this.dataPost.name=name
    this.dataPost.Images=Images
    this.dataPost.Description=Description
    this.dataPost.id=id
    this.imageUrl=Images[0]
    this.dataPost.Comments=Comments

    this.http.getsinglepost(this.dataPost.id).subscribe(data => {this.singlepost=data
      this.Comments=this.singlepost.Comments

    })

      }

      changeImage(e:any){
        this.imageUrl=e.src
        }

addcomment(f:NgForm){
  let data = f.value
  this.userdata.addcommentaire(data,this.dataPost.id).subscribe((data) => {f.value.reset


  }
  )

}


  ngOnInit(): void {

  }

}
