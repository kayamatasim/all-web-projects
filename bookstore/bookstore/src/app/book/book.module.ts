import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[BookCardComponent]
})
export class BookModule { }
