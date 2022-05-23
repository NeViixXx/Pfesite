import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  p:number=0
formations:any
filtreddata:any
  constructor(private http:HttpService) {

    this.http.getallformations().subscribe(data => {this.formations=data
      this.filtreddata = this.formations.filter((val:any) => val.Participants.length >0 )

    });


  }



  ngOnInit(): void {
  }

}
