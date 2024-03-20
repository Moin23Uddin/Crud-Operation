import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PoststudentsComponent} from "./poststudents/poststudents.component";
import {GetstudentsComponent} from "./getstudents/getstudents.component";
import {UpdatestudentsComponent} from "./updatestudents/updatestudents.component";
const routes: Routes = [
  {path:"student",component:PoststudentsComponent},
  {path:"",component:GetstudentsComponent},
  {path:"student/:id",component:UpdatestudentsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
