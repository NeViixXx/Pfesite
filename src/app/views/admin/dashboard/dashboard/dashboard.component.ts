import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
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
canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;





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

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
            data: [300, 50, 100,1111],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',],

          }],

          labels: ['Offres', 'Participations', 'Formations', 'April 2019']
      },
  });
  }
}
