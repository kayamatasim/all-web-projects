import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HomeModule } from '../home/home.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  
  ],
  exports:[BookCardComponent]
})
export class BookModule { }
