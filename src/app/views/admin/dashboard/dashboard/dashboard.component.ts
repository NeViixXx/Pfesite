import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe],
})
export class DashboardComponent implements OnInit {
  formations: any;
  filtreddata: any;
  nbform = 0;
  nboffre = 0;

  users: any;


  offres: any;
  canvas: any;
  ctx: any;

  canvas1: any;
  ctx1: any;

  currentDateTime: any;

  private offre: Subscription = new Subscription();
  @ViewChild('mychart') mychart: any;
  @ViewChild('chart2') chart2: any;

  constructor(private http: HttpService, private datePipe: DatePipe) {
    this.currentDateTime = this.datePipe.transform(new Date(), 'dd/MM/yyyy');

    this.http.getallformations().subscribe((data) => {
      this.formations = data;
      this.filtreddata = this.formations.filter(
        (val: any) => val.Participants.length > 0
      );

      this.filtreddata.map((x: any) => {
        this.nbform = this.nbform + x.Participants.length;
      });
    });
    this.offre = this.http.getalloffres().subscribe((data) => {
      this.offres = data;
      this.filtreddata = this.offres.filter(
        (val: any) => val.Condidats.length > 0
      );

      this.filtreddata.map((x: any) => {
        this.nboffre = this.nboffre + x.Condidats.length;
      });
    });

    this.http.getallusers().subscribe((data) => {
      this.users = data;})
  }



  datechart(i: number) {
    let today = new Date();
    const month = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ];
    const dd =
      today.getDate() -
      i +
      '/' +
      month[today.getMonth()] +
      '/' +
      today.getFullYear();
    return dd;
  }

  usersdata(i: number) {

      let filtredusers = this.users.filter(
        (val: any) =>
          moment(val.createdAt).format('D/MM/YYYY') === this.datechart(i)
      );
        const usersnumber=filtredusers.length
console.log(filtredusers.length)
      return usersnumber


  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas1 = this.chart2.nativeElement;
    this.ctx1 = this.canvas1.getContext('2d');
    this.offre = this.http.getalloffres().subscribe((data) => {
      this.offres = data;
      this.filtreddata = this.offres.filter(
        (val: any) => val.Condidats.length > 0
      );

      this.filtreddata.map((x: any) => {
        this.nboffre = this.nboffre + x.Condidats.length;
        this.http.getallformations().subscribe((data) => {
          this.formations = data;
          this.filtreddata = this.formations.filter(
            (val: any) => val.Participants.length > 0
          );

          this.filtreddata.map((x: any) => {
            this.nbform = this.nbform + x.Participants.length;

            new Chart(this.ctx, {
              type: 'doughnut',
              data: {
                datasets: [
                  {
                    data: [
                      this.nboffre,
                      this.nbform,
                      this.offres.length,
                      this.formations.length,
                    ],
                    backgroundColor: [
                      '#0d6efd',
                      '#198754',
                      '#0dcaf0',
                      '#ffc107',
                    ],
                  },
                ],

                labels: ['Condidats', 'Participants', 'Offres', 'Formations'],
              },
            });



            new Chart(this.ctx1, {
              type: 'line',
              data: {
                datasets: [
                  {
                    label: 'Nouveau utilisateurs dans les 7 derniers jours',
                    data: [

                      this.usersdata(6),
                      this.usersdata(5),
                      this.usersdata(4),
                      this.usersdata(3),
                      this.usersdata(2),
                      this.usersdata(1),
                      this.usersdata(0)

                    ],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',

                  },
                ],
                labels: [
                  this.datechart(6),
                  this.datechart(5),
                  this.datechart(4),
                  this.datechart(3),
                  this.datechart(2),
                  this.datechart(1),
                  this.datechart(0),
                ],
              },
            });
          });
        });
      });
    });
  }

  ngOnInit(): void {
    console.log(this.usersdata(13))
  }
}
