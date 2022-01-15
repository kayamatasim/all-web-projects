import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook/addbook.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [

 {path:'addbook',component:AddbookComponent},
 {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
