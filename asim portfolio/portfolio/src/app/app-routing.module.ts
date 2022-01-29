import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { AdminnComponent } from './adminn/adminn.component';
import { Education_detailsComponent } from './components/education_details/education_details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';


const routes: Routes = [
  {path:'components/skills',component:SkillsComponent},
  {path:'components/tools',component:ToolsComponent},
  {path:'components/experience',component:ExperienceComponent},
  {path:'components/education',component:EducationComponent,children:[
    {path:':id',component:Education_detailsComponent},
    {path:'',component:PlaceholderComponent}
  ]},
  {path:'admin',component:AdminnComponent},
  {path:'**',redirectTo:'admin',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SkillsComponent,ToolsComponent,ExperienceComponent,EducationComponent]
