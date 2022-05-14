import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {

  id:any
  dataFormation:any
participer:any
verif=0

    constructor(private http:HttpService , private aroute:ActivatedRoute, private fb:FormBuilder) {
      this.aroute.params.subscribe(data => this.id=data['id']);

      this.participer = this.fb.group({
        email: ['', {
            validators: [
               Validators.required,
               Validators.email
            ]},],
            name: ['', {
              validators: [
                 Validators.required
              ]},],
              namesoc: ['', {
                validators: [
                   Validators.required
                ]},],
                adresse: ['', {
                  validators: [
                     Validators.required,
                     Validators.minLength(10)
                  ]},],
                  tel: ['', {
                    validators: [
                       Validators.required,
                       Validators.minLength(8),
                       Validators.maxLength(8),
                       Validators.pattern("[0-9 ]{8}")
                    ]},],
                    commentaire: ['',],
      });

    }


    get email() {
      return this.participer.controls['email'];
  }

  get name() {
      return this.participer.controls['name'];
  }
  get namesoc() {
    return this.participer.controls['namesoc'];
  }
  get adresse() {
    return this.participer.controls['adresse'];
  }
  get tel() {
    return this.participer.controls['tel'];
  }

  get commentaire() {
    return this.participer.controls['commentaire'];
  }

    ngOnInit(): void {
      this.http.getsignleformation(this.id).subscribe(data => {this.dataFormation=data})

    }
    add(){
      let data=this.participer.value

      this.http.participer(data,this.id).subscribe(data =>  console.log("done"),
      // The 2nd callback handles errors.
      (err) => this.verif=2,
      // The 3rd callback handles the "complete" event.
      () => this.verif=1
      )


    }
}
