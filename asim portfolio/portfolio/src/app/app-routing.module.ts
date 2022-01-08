import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';

const routes: Routes = [
  {path:'components/skills',component:SkillsComponent},
  {path:'components/tools',component:ToolsComponent},
  {path:'components/experience',component:ExperienceComponent},
  {path:'components/education',component:EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SkillsComponent,ToolsComponent,ExperienceComponent,EducationComponent]
