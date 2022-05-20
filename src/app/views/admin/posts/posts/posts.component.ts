import { HttpErrorResponse } from '@angular/common/http';
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

  selectedFiles?: FileList;
  Images: string[] = [];
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

updatepost(f:any){

  let data = f.value

  this.http.updatepost(data,this.dataPost.id).subscribe(resp => window.location.reload() ),
  (err:HttpErrorResponse)=>console.log(err.message)
}



  ngOnInit(): void {
  }

}
