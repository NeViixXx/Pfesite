import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-updatepass',
  templateUrl: './updatepass.component.html',
  styleUrls: ['./updatepass.component.css']
})
export class UpdatepassComponent implements OnInit {
id:any
  constructor(private http:HttpService,private toast:NgToastService) { }

  ngOnInit(): void {
  }
update(f:NgForm){
  let data = f.value
  if (data.password === data.confpass){
    this.http.updatepass(data).subscribe(resp=>  this.toast.success({detail:"Envoyée",summary:"Mot de passe modifiée", duration:3000}))}

}

}
