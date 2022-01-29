import { BookService } from '../../../servises/book-service.service';
import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { FormsModule } from '@angular/forms';
// import { BookServiceService } from 'src/app/book/servises/book-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  BookServiceService: any;

  constructor(private bookService: BookService) { }

  books!: BookModel[];

  // Lifecycle hook, component is initialized
  ngOnInit(): void {
    // this.books = [];
    // let book = new BookModel();
    // book.id = 1;
    // book.name = "Sidhhartha";
    // book.price = 200;
    // book.author = "Herman H";
    // book.imgSrc = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Siddhartha_%281922%29_by_Hermann_Hesse.jpg";
    // this.books.push(book);
    
    // let book2 = new BookModel();
    // book2.id = 2;
    // book2.name = ".Net 2.0";
    // book2.price = 200;
    // book2.author = "Xyz Pub.";
    // book2.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg";
    // this.books.push(book2);

    

    const bookobservable=this.bookService.getBooks()
    bookobservable.subscribe(
      (result:any)=>{this.books=result;
      
      },
      (err:any)=>{console.log(err)},
      ()=>{console.log("done")
      console.log(this.books)
    }
  )

 
 

  }

  
  

}