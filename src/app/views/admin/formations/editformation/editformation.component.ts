import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.css']
})
export class EditformationComponent implements OnInit {
id:any
  img:any
  editformation:any
  Categoryform:any
  dataform:any
  constructor(private http : HttpService,private fb:FormBuilder, private route:Router,private aroute:ActivatedRoute) {
    this.http.getallcategory().subscribe(data => this.Categoryform=data);
    this.editformation = this.fb.group({
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
    return this.editformation.controls['name'];
  }

  get Description() {
    return this.editformation.controls['Description'];
  }
  get Objectif() {
    return this.editformation.controls['Objectif'];
  }
  get Informations() {
    return this.editformation.controls['Informations'];
  }
  get Programme() {
    return this.editformation.controls['Programme'];
  }
  get Duree() {
    return this.editformation.controls['Duree'];
  }
  get Horraire() {
    return this.editformation.controls['Horraire'];
  }
  get Certificat() {
    return this.editformation.controls['Certificat'];
  }
  get category() {
    return this.editformation.controls['category'];
  }



  ngOnInit(): void {
    this.aroute.params.subscribe(data => this.id=data['id']);
  this.http.getsignleformation(this.id)
     .subscribe(data => {
       this.dataform = data
       this.editformation = this.fb.group({
        name: [this.dataform['name']],
            Description: [this.dataform['Description']],
              Objectif: [this.dataform['Objectif']],
                Informations: [this.dataform['Informations']],
                  Programme: [this.dataform['Programme']],
                    Duree: [this.dataform['Duree']],
                      Horraire: [this.dataform['Horraire']],

                      Certificat: [this.dataform['Certificat']],
                        category: [this.dataform['category']],
      });
      });

  }




  onFileSelected(event:any) {

    const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {				this.img=reader.result;
			}
		};	reader.readAsDataURL(event.target.files[0]);
}

edit(){
  let data=this.editformation.value
  data.Image= this.img || ""
  this.http.updateformation(this.id,data).subscribe(data => this.route.navigate(['admin/']) );

}


}
