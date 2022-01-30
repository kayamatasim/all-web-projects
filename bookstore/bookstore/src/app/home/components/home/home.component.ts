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