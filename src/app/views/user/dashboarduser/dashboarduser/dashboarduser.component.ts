import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



declare var $:JQueryStatic;
@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);



  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }



  ngOnInit(): void {

//     $('#carouselExampleControls').on('slid', '', checkitem);  // on caroussel move
// $('#carouselExampleControls').on('slid.bs.carousel', '', checkitem); // on carousel move

// $(document).ready(function(){               // on document ready
//     checkitem();
// });

// function checkitem()                        // check function
// {
//     var $this = $('#carouselExampleControls');
//     if($('.carousel-inner .carousel-item:first').hasClass('active')) {
//        $this.children('.left.carousel-control').hide();
//         $this.children('.right.carousel-control').show();
//     } else if($('.carousel-inner .carousel-item:last').hasClass('active')) {
//        $this.children('.left.carousel-control').show();
//         $this.children('.right.carousel-control').hide();
//     } else {
//         $this.children('.carousel-control').show();
//     }
// }
  }

}
