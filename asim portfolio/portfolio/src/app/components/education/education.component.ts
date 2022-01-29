import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { UsersService } from '../../servises/users.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent  implements OnInit {

 @Output() changeit:EventEmitter<string> = new EventEmitter<string>();


  countercontrol(property:string){
    this.changeit.emit(property);
    console.log('clicked')
  }

  constructor(private UsersService:UsersService){}
  users:any;


  ngOnInit(): void {
      // this.users=this.UsersService.users;
      
      this.UsersService.getusersonline().subscribe(user=>this.users=user);
  }
 
}
