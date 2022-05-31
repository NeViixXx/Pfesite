import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
usersdata:any
p:number=0
  constructor(private http:HttpService) {
    this.http.getallusers().subscribe(data => {
      this.usersdata=data
      console.log(data)})
  }
delete(id:any,i:any){
this.http.deleteusers(id).subscribe(data =>
  this.usersdata.splice(i,1)

  )
}
  ngOnInit(): void {
  }

}
