import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminnComponent } from './adminn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AdminnComponent],
  declarations: [AdminnComponent]
})
export class AdminnModule { }
