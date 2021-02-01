import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';

import { Login } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { EditprofilestudentComponent } from './editprofilestudent/editprofilestudent.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardCompanyComponent } from './dashboard-company/dashboard-company.component';
import { CreateInternshipComponent } from './create-internship/create-internship.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyInternshipsComponent } from './my-internships/my-internships.component';
import { HomeStudentComponent} from './home-student/home-student.component';
import { Main } from './main.component';
import { FindInternshipComponent} from './find-internship/find-internship.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    Login,
    RegisterStudentComponent,
    RegisterCompanyComponent,
    DashboardStudentComponent,
    DashboardCompanyComponent,
    EditprofilestudentComponent,
    CreateInternshipComponent,
    MyRequestsComponent,
    MyInternshipsComponent,
    Main,
    HomeStudentComponent,
    FindInternshipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatDialogModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [Main],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
