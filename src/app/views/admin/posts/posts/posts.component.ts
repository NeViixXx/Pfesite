import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthuserService } from 'src/app/services/authuser.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  p:number=1
posts:any
dataPost={
  name:'',
  Description:'',
  Images:[],
  id:''
  }
  Comments: any[] =[]
  userprofile:any
singlepost:any
imageUrl: string = '';
  selectedFiles?: FileList;
  Images: string[] = [];
  constructor(private http:HttpService , private userdata:AuthuserService) {
      this.http.getpost().subscribe(data => {this.posts=data
      })
      this.userdata.getprofile().subscribe(data => {
        this.userprofile=data
      })

  }

  changeImage(e:any){
    this.imageUrl=e.src
    }

  getdata(name:string,Images:any,Description:string,id:any){
    this.dataPost.name=name
    this.dataPost.Images=Images
    this.dataPost.Description=Description
    this.dataPost.id=id
    this.http.getsinglepost(this.dataPost.id).subscribe(data => {this.singlepost=data
      this.Comments=this.singlepost.Comments

    })
      }


      delete(id:any,i:any){
       this.http.deletepost(id).subscribe(Response => this.posts.splice(i,1));
      }

      selectImages(event: any): void {
        this.selectedFiles = event.target.files;

        if (this.selectedFiles && this.selectedFiles[0]) {
          const numberOfFiles = this.selectedFiles.length;
          for (let i = 0; i < numberOfFiles; i++) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              this.Images.push(e.target.result);
            };
            reader.readAsDataURL(this.selectedFiles[i]);
          }
        }
      }




  ngOnInit(): void {
  }

}
