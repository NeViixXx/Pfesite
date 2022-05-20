import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
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


  private offre: Subscription = new Subscription;
  @ViewChild('mychart') mychart:any;





  constructor(private http:HttpService) {

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

  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
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

})
});
})
});

  }


}
