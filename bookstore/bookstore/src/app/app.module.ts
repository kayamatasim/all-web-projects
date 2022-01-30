import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './book/book.module';
import { AppRoutingModule } from './app-routing.module';
import { AddbookModule } from './addbook/addbook.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook/addbook.component';
import { HomeComponent } from './home/components/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




const routes=[
  {path:'addbook',component:AddbookComponent},
 {path:'home',component:HomeComponent}
]

@NgModule({
  // Components in this module.
  declarations: [
    AppComponent,
    // AddbookComponent
 
],
  // Imports modules it depends on
  imports:[
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(routes),
    AddbookModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // exports:[AddbookComponent],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }