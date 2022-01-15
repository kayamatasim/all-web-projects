import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AddbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    AppRoutingModule
  
  ],
  exports:[
    AddbookComponent
  ]
})
export class AddbookModule { }
