import { Component, Input, OnInit } from '@angular/core';
import { bookmodel } from 'src/app/models/books.model';
@Component({
  selector: 'app-ex',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() book!:bookmodel;
  constructor() { }

  ngOnInit(): void {

  }

}
