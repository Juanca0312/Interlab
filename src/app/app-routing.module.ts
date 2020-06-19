import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardStudentComponent} from "./dashboard-student/dashboard-student.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {EditprofilestudentComponent} from "./editprofilestudent/editprofilestudent.component";
import {BuscarpasantiaComponent} from "./buscarpasantia/buscarpasantia.component";

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'dashboard-student', component:DashboardStudentComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'editprofile', component: EditprofilestudentComponent},
  {path: 'buscarpasantia', component: BuscarpasantiaComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
