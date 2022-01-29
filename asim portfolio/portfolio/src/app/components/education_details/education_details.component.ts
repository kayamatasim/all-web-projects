import { UsersService } from './../../servises/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education_details',
  templateUrl: './education_details.component.html',
  styleUrls: ['./education_details.component.css']
})
export class Education_detailsComponent implements OnInit {
  users:any;
  user:any;
  constructor(private UsersService:UsersService,private activatedroute:ActivatedRoute) {
  
    

   }

  ngOnInit() {
    this.users=this.UsersService.users;
    this.activatedroute.params.subscribe((params)=>{
      this.UsersService.getusersbyid_online(+params.id).subscribe((user)=>{
        this.user=user;
        });
      

        
    })
  }

}

