import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    AppRoutingModule,
    HttpClientModule
  
  ],
  exports:[
    AddbookComponent
  ]
})
export class AddbookModule { }
