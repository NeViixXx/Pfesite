import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
img:any
verif=0

  constructor(private http:HttpService, private route:Router) {


   }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {

    const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {				this.img=reader.result;
			}
		};	reader.readAsDataURL(event.target.files[0]);
}


  addcat(cat:any){
    let data=cat.value
    data.Image=this.img
    this.http.addcategory(data).subscribe((data) => {console.log(data)
      this.route.navigate([`/admin/Catégories`])},
    // The 2nd callback handles errors.
    (err) => this.verif=2,
    // The 3rd callback handles the "complete" event.
    () => this.verif=1
    )

  }

}
