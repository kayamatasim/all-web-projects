
import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../book/models/book.model';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/servises/book-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookapi:BookService) { }

  list:BookModel[]=[]
 
  bookref=new FormGroup({
    name:new FormControl(),
    author:new FormControl(),
    price:new FormControl(),
    imgsrc:new FormControl()

  })

 
addbook(){
  let book=this.bookref.value;
  console.log(book);

  this.bookapi.postbook(book).subscribe(res=>{
    console.log(res)
  },
  (err)=>{console.log(err)},
  ()=>{console.log('finished')})
}

  
  
 

  ngOnInit(): void {
 
  }

}

  // async callapi(){
  //  let res= await fetch('127.0.0.1:3100');
  //  let data=await res.json();
  //   this.apidata=data;
  //   console.log(this.apidata);
  // }
