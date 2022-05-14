import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
formations:any
filtreddata:any
nbform=0
nboffre=0
offres:any

  constructor(private http:HttpService) {

      this.http.getallformations().subscribe(data => {this.formations=data
        this.filtreddata = this.formations.filter((val:any) => val.Participants.length >0 )

        this.filtreddata.map((x:any) => {

          this.nbform=this.nbform+x.Participants.length
        })
      });
      this.http.getalloffres().subscribe(data => {this.offres=data
        this.filtreddata = this.offres.filter((val:any) => val.Condidats.length >0 )

        this.filtreddata.map((x:any) => {

          this.nboffre=this.nboffre+x.Condidats.length
        })
      });


    };



  ngOnInit(): void {
  }

}
