import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
img:any
user:any
userprofile:any

  constructor(private userdata:AuthuserService) {

    this.user = this.userdata.getdata('user')
    this.user = JSON.parse(this.user)
console.log(this.user._id)
    this.userdata.getprofile().subscribe(data => {
      this.userprofile=data
      this.img=this.userprofile.avatar
    })

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

  Modif(f:NgForm){
  let data = f.value
  data.avatar=this.img
    this.userdata.updateprofile(data).subscribe(data => {
      location.reload();

    })

   }


}
