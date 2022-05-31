import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';






@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  addpost:any
  selectedFiles?: FileList;
  Images: string[] = [];


  constructor(private fb:FormBuilder, private route:Router,private http:HttpService) {
    this.addpost = this.fb.group({
      name: ['', {
          validators: [
             Validators.required,
          ]},],
          Description: ['', {
            validators: [
               Validators.required,
            ]},],
          Images :this.fb.array(['', {
            validators: [
               Validators.required,
            ]},]),

    });
   }

  ngOnInit(): void {
  }

  get name() {
    return this.addpost.controls['name'];
  }

  get Description() {
    return this.addpost.controls['Description'];
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




delete(i:any){
  this.Images.splice(i,1)
    }




        add(){
          let data=this.addpost.value
          data.Images=this.Images
          this.http.addpost(data).subscribe(data => console.log(data),
         (err) => console.log(err))

        }

}
