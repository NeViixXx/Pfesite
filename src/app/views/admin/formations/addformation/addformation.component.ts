import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {

  img:any
  ajoutformation:any
  Categoryform:any
  constructor(private http : HttpService,private fb:FormBuilder, private route:Router) {
    this.http.getallcategory().subscribe(data => this.Categoryform=data);
    this.ajoutformation = this.fb.group({
      name: ['', {
          validators: [
             Validators.required,
          ]},],
          Description: ['', {
            validators: [
               Validators.required,
            ]},],
            Objectif: ['', {
              validators: [
                 Validators.required,
              ]},],
              Informations: ['', {
                validators: [
                   Validators.required,
                ]},],
                Programme: ['', {
                  validators: [
                     Validators.required,
                  ]},],
                  Duree: ['', {
                    validators: [
                       Validators.required,
                    ]},],
                    Horraire: ['', {
                      validators: [
                         Validators.required,
                      ]},],

                    Certificat: ['', {
                      validators: [
                         Validators.required,
                      ]},],
                      category: ['', {
                        validators: [
                           Validators.required,
                        ]},],
    });

   }

   get name() {
    return this.ajoutformation.controls['name'];
  }

  get Description() {
    return this.ajoutformation.controls['Description'];
  }
  get Objectif() {
    return this.ajoutformation.controls['Objectif'];
  }
  get Informations() {
    return this.ajoutformation.controls['Informations'];
  }
  get Programme() {
    return this.ajoutformation.controls['Programme'];
  }
  get Duree() {
    return this.ajoutformation.controls['Duree'];
  }
  get Horraire() {
    return this.ajoutformation.controls['Horraire'];
  }
  get Certificat() {
    return this.ajoutformation.controls['Certificat'];
  }
  get category() {
    return this.ajoutformation.controls['category'];
  }



  ngOnInit(): void {
  }




  onFileSelected(event:any) {

    const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {				this.img=reader.result;
			}
		};	reader.readAsDataURL(event.target.files[0]);
}

add(){
  let data=this.ajoutformation.value
  data.Image=this.img
  this.http.addformation(data).subscribe(data => this.route.navigate(['admin/']) );

}

}
