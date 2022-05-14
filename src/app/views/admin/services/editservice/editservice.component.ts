import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {
  id:any
  dataService:any
  tab:any
  img:any
  editservice:any

  constructor(private http : HttpService,private fb:FormBuilder, private route:Router,private aroute:ActivatedRoute) {

    this.editservice = this.fb.group({
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
    return this.editservice.get('name');
  }

  get Description() {
    return this.editservice.get('Description');
  }

  get Caracteristique() {
    return this.editservice.get('Caracteristique') as FormArray;
  }

  ngOnInit(): void {
    this.aroute.params.subscribe(data => this.id=data['id']);
    this.http.getservice(this.id).subscribe(data => {
      this.dataService=data;
      this.tab=this.dataService.Caracteristique
      this.name.setValue(this.dataService.name)
      this.Description.setValue(this.dataService.Description)

      this.dataService.Caracteristique.forEach((data: any) => {
        this.Caracteristique.push(this.fb.group({title: data.title,
          text: data.text}))

      })



});

  }



  Addnew(){
this.Caracteristique.push(this.fb.group({
  title:[''],
  text:[''],
}))
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

edit(){
  let data=this.editservice.value

  data.Image= this.img || ""
console.log(data)

  this.http.updateservice(this.id,data).subscribe(data => this.route.navigate(['admin/Services/']));

}
}
