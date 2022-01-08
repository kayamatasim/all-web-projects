import { Component, OnInit } from '@angular/core';
import {KeyValue} from '@angular/common';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})


export class SkillsComponent implements OnInit {
  skills:{}={
 "creativity":5,
"Critical Thinking.":4,
"Problem Solving.":5,
"Public Speaking.":5,
"Teamwork Skills.":4,
"Communication.":4,
"Collaboration":4,
"ActiveListening .":5,
"Adaptability.":5,
"Conflict Resolution.":4,
"Leadership skills.":4,
"Language skills.":5
  }


  constructor() { }

  ngOnInit(): void {
  }

}


// export class MyComponent {
//   private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
//     return -1;
//   }
// }

