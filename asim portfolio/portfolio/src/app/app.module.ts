import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminnModule } from './adminn/adminn.module';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ToolsComponent } from './components/tools/tools.component';
import { EducationComponent } from './components/education/education.component';
import { Education_detailsComponent } from './components/education_details/education_details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    ExperienceComponent,
    ToolsComponent,
    EducationComponent,
   Education_detailsComponent,
   PlaceholderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminnModule,
    HttpClientModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
