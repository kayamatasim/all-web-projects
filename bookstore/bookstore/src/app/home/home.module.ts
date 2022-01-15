import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';
import { AppRoutingModule } from '../app-routing.module';
import { AddbookModule } from '../addbook/addbook.module';





@NgModule({
  declarations: [
    HomeComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule,
    AppRoutingModule,
    AddbookModule
  
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
