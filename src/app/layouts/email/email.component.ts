import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private http:HttpService) { }

mail(f:any){

this.http.forgotpass(f.value).subscribe(data => console.log(data))
}

  ngOnInit(): void {
  }

}
