import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmore',
  templateUrl: './showmore.component.html',
  styleUrls: ['./showmore.component.css']
})
export class ShowmoreComponent implements OnInit {
@Input() text : string = '' ;
@Input() wordLimit : number = 0 ;
showmore : boolean ;
  constructor() {
    this.showmore=false;
   }

  ngOnInit(): void {
  }

}
