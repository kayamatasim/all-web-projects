
import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../book/models/book.model';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/servises/book-service.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookapi:BookService) { }

  list:BookModel[]=[]
  bookname!:string;
  price!:any;
  author!:string;

  image!:string;
  apidata!:string;
  addbook(){
    let book:BookModel={
    
      name: this.bookname,
      author: this.author,
      price: this.price,
      imgSrc: this.image
    };
    alert(JSON.stringify(book));
    
    this.bookapi.postbook(book).subscribe((book)=>{
      alert('submitted'+JSON.stringify(book)),
      (err:any)=>{alert(err)}
    }
     
    ,
    (err)=>{alert("error occures"+JSON.stringify(err))},
    ()=>{
      alert('done');
    })
    

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
