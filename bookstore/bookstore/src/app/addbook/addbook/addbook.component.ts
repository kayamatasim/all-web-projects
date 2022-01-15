import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../book/models/book.model';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  hen='nothing'
  list:BookModel[]=[]
  bookname!:string;
  price!:any;
  author!:string;
  id!:any;
  image!:string;
  addbook(){
    let book:BookModel={
      id: this.price,
      name: this.bookname,
      author: this.author,
      price: this.price,
      imgSrc: this.image
    };
    this.list.push(book);
    console.log(this.list);
  }
  constructor() { }

  ngOnInit(): void {
    let bookname=document.querySelector('input#bookname');
    let price=document.querySelector('input#price');
    
    let author=document.querySelector('input#author');
    let id=document.querySelector('input#id');
    let image=document.querySelector('input#imgsrc');
    let addbtn=document.querySelector('input#add');

    addbtn?.addEventListener('click',()=>{
     (<HTMLInputElement>bookname).value=this.bookname;
     (<HTMLInputElement>price).value=this.price;
     (<HTMLInputElement>author).value=this.author;
     (<HTMLInputElement>id).value=this.id;
     (<HTMLInputElement>image).value=this.image;
        this.addbook()
    })


    
  }

}
