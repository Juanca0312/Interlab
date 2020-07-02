import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {DashboardStudentComponent} from './dashboard-student/dashboard-student.component';
import {LoginComponent} from './login/login.component';
import {EditprofilestudentComponent} from './editprofilestudent/editprofilestudent.component';
import {BuscarpasantiaComponent} from './buscarpasantia/buscarpasantia.component';
import {CreateInternshipComponent} from './create-internship/create-internship.component';
import {DashboardCompanyComponent} from "./dashboard-company/dashboard-company.component";

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboardStudent', component: DashboardStudentComponent},
  { path: 'editProfile', component: EditprofilestudentComponent},
  { path: 'findInternship', component: BuscarpasantiaComponent},
  { path: 'createInternship', component: CreateInternshipComponent},
  { path: 'dashboardCompany', component: DashboardCompanyComponent}

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
