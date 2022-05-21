import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
formations:any
filtreddata:any
nbform=0
nboffre=0

users:any
filtredusers:any

offres:any
canvas: any;
  ctx: any;

  canvas1: any;
  ctx1: any;


  private offre: Subscription = new Subscription;
  @ViewChild('mychart') mychart:any;
  @ViewChild('chart2') chart2:any;




  constructor(private http:HttpService , private datePipe: DatePipe ) {
    let currentDateTime =this.datePipe.transform((new Date), 'MM/dd/yyyy');
    console.log(currentDateTime);

      this.http.getallformations().subscribe(data => {this.formations=data
        this.filtreddata = this.formations.filter((val:any) => val.Participants.length >0 )

        this.filtreddata.map((x:any) => {

          this.nbform=this.nbform+x.Participants.length
        })
      });
   this.offre= this.http.getalloffres().subscribe(data => {this.offres=data
        this.filtreddata = this.offres.filter((val:any) => val.Condidats.length >0 )

        this.filtreddata.map((x:any) => {

        this.nboffre=this.nboffre+x.Condidats.length

        })
      });





    };



  ngOnInit(): void {
    this.http.getallusers().subscribe(data => {
      this.users=data
      this.filtredusers = this.users.filter((val:any) =>{ val.createdAt}
     )
     console.log(this.filtredusers)
    })
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas1 = this.chart2.nativeElement;
    this.ctx1 = this.canvas1.getContext('2d');
    this.offre= this.http.getalloffres().subscribe(data => {this.offres=data
      this.filtreddata = this.offres.filter((val:any) => val.Condidats.length >0 )

      this.filtreddata.map((x:any) => {

      this.nboffre=this.nboffre+x.Condidats.length
      this.http.getallformations().subscribe(data => {this.formations=data
        this.filtreddata = this.formations.filter((val:any) => val.Participants.length >0 )

        this.filtreddata.map((x:any) => {

          this.nbform=this.nbform+x.Participants.length



    new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
            data: [this.nboffre,this.nbform,this.offres.length,this.formations.length],
            backgroundColor: [
              '#0d6efd',
              '#198754',
              '#0dcaf0',
              '#ffc107'],

          }],

          labels: ['Condidats', 'Participants', 'Offres', 'Formations']
      },
  });




    new Chart(this.ctx1, {
      type: 'line',
      data: {
          datasets: [{
            label: 'Nouveau utilisateurs dans les 7 derniers jours',
            data: [this.nboffre,this.nbform,this.offres.length,this.formations.length],
          }],

          labels: ['Jours', 'Participants', 'Offres', 'Formations']
      },
  });






})
});
})
});





  }


}
