import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

token:any

  constructor(private http:HttpService,private aroute:ActivatedRoute,private route:Router) {
    this.aroute.params.subscribe(data => this.token=data['token']);

   }

resetpass(f:any){
let data=f.value
if (data.password === data.confpassword){
  this.http.resetpass(data,this.token).subscribe(resp=> this.route.navigate(['/login']) )
}
}

  ngOnInit(): void {
  }

}
