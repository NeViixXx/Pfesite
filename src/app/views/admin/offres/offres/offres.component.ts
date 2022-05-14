import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cilDescription } from '@coreui/icons';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  Offres : any
  oneOffre:any
dataOffre={
Type:'',
name:'',
Niveau:'',
Postes:0,
Description:'',
id:''
}


  constructor(private http:HttpService) {
    this.http.getalloffres().subscribe(data => this.Offres=data);


  }
  ngOnInit(): void {
  }

  getdata(Type:string,name:string,Niveau:string,Postes:number,Description:string,id:any){
this.dataOffre.Type=Type
this.dataOffre.name=name
this.dataOffre.Niveau=Niveau
this.dataOffre.Postes=Postes
this.dataOffre.Description=Description
this.dataOffre.id=id
  }

  delete(id:any,i:any){
    this.http.deleteoffre(id).subscribe(Response => this.Offres.splice(i,1));
  }

  details(Type:string,name:string,Niveau:string,Postes:number,Description:string,id:any){
    this.dataOffre.Type=Type
    this.dataOffre.name=name
    this.dataOffre.Niveau=Niveau
    this.dataOffre.Postes=Postes
    this.dataOffre.Description=Description
    this.dataOffre.id=id
  }

updateoffre(f:any){

  let data = f.value

this.http.updateoffre(data,this.dataOffre.id).subscribe(resp => window.location.reload() ),
(err:HttpErrorResponse)=>console.log(err.message)

}
}
