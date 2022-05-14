import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    title = 'title';
    //Loader variable default true before page load
    loader = true;
    ngOnInit(): void {

       //Loader variable set false after page load
      setTimeout(()=>{
        this.loader = false;
    }, 5000);
    }

}
