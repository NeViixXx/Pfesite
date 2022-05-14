
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-condidiature',
  templateUrl: './condidiature.component.html',
  styleUrls: ['./condidiature.component.css']
})
export class CondidiatureComponent implements OnInit {

  id:any
  cv:any
  fileName = '';
  verif = 0
  condidature:any


  constructor( private http:HttpService,private aroute:ActivatedRoute ,private fb:FormBuilder) {
    this.aroute.params.subscribe(data => {this.id=data['id']});

    this.condidature = this.fb.group({
      email: ['', {
          validators: [
             Validators.required,
             Validators.email
          ]},],
          name: ['', {
            validators: [
               Validators.required
            ]},],
                tel: ['', {
                  validators: [
                     Validators.required,
                     Validators.minLength(8),
                     Validators.maxLength(8),
                     Validators.pattern("[0-9 ]{8}")
                  ]},],
                  cv: ['',{Validators:[
                    Validators.required,
                  ]}],
    });



  }

  ngOnInit(): void {

  }

  onFileSelected(event:any) {

    const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {				this.cv=reader.result;
			}
		};	reader.readAsDataURL(event.target.files[0]);
}


get email() {
  return this.condidature.controls['email'];
}

get name() {
  return this.condidature.controls['name'];
}
get tel() {
return this.condidature.controls['tel'];
}



  add(){
    let data=this.condidature.value
data.cv=this.cv


    this.http.condidature(data,this.id).subscribe((data) => console.log("done"),
    // The 2nd callback handles errors.
    (err) => this.verif=2,
    // The 3rd callback handles the "complete" event.
    () => this.verif=1
    )


  }
}
