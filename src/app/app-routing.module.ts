import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', component:ImageComponentComponent},
  {path:'education', component:EducationComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'hobbies', component:HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EducationComponent,
                                  ExperienceComponent,
                                  ProjectsComponent,
                                  HobbiesComponent]