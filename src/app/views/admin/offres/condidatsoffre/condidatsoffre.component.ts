import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-condidatsoffre',
  templateUrl: './condidatsoffre.component.html',
  styleUrls: ['./condidatsoffre.component.css']
})
export class CondidatsoffreComponent implements OnInit {
offres:any
filtreddata:any
p:number=0
  constructor(private http:HttpService) {
this.http.getalloffres().subscribe(data=>{this.offres=data
  this.filtreddata = this.offres.filter((val:any) => val.Condidats.length >0 )

})
   }

  ngOnInit(): void {
  }

}
