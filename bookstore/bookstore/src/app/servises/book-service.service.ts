import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { BookModel } from '../book/models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }
url="http://localhost:3100/api/book"


getBooks(){
  return this.http.get(this.url)
    .pipe(map((res)=> res));
   
}


postbook(book:BookModel){
   return this.http.post(this.url,book);
}

}