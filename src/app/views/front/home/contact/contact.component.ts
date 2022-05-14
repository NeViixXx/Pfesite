import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { FormGroup, FormControl, Validators, FormBuilder }
    from '@angular/forms';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

verif = 0
contactform : any
  constructor(private http : HttpService,private fb:FormBuilder) {
    this.contactform = this.fb.group({
      email: ['', {
          validators: [
             Validators.required,
             Validators.email
          ]},],
          sujet: ['', {
            validators: [
               Validators.required,
               Validators.minLength(5)
            ]},],
            message: ['', {
              validators: [
                 Validators.required,
                 Validators.minLength(10)
              ]},]
    });




  }

  get email() {
    return this.contactform.controls['email'];
}

get sujet() {
    return this.contactform.controls['sujet'];
}
get message() {
  return this.contactform.controls['message'];
}

  ngOnInit(): void {


  }

  add(){
    let data=this.contactform.value
    this.http.contacter(data).subscribe((data) => console.log("done"),
    // The 2nd callback handles errors.
    (err) => this.verif=2,
    // The 3rd callback handles the "complete" event.
    () => this.verif=1
    )


  }

}
