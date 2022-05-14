import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  img:any
  ajoutservice:any
  constructor(private http : HttpService,private fb:FormBuilder, private route:Router) {
    this.ajoutservice = this.fb.group({
      name: ['', {
          validators: [
             Validators.required,
          ]},],
          Description: ['', {
            validators: [
               Validators.required,
            ]},],
          Caracteristique :this.fb.array([
            this.fb.group({
              title:[''],
              text:[''],
            })
          ])

    });

   }

   get name() {
    return this.ajoutservice.controls['name'];
  }

  get Description() {
    return this.ajoutservice.controls['Description'];
  }

  get Caracteristique() {
    return this.ajoutservice.get('Caracteristique') as FormArray;
  }

  ngOnInit(): void {
  }



  Addnew(){
let newInput = this.fb.group({
  title:[''],
  text:[''],
})
this.Caracteristique.push(newInput)
  }

  delete(i:any){
this.Caracteristique.removeAt(i)
  }


  onFileSelected(event:any) {

    const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {				this.img=reader.result;
			}
		};	reader.readAsDataURL(event.target.files[0]);
}

add(){
  let data=this.ajoutservice.value
  data.Image=this.img
  this.http.addservice(data).subscribe(data => this.route.navigate(['admin/Services/']));

}

}
