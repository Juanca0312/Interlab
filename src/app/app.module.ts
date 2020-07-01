import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { EditprofilestudentComponent } from './editprofilestudent/editprofilestudent.component';
import { BuscarpasantiaComponent } from './buscarpasantia/buscarpasantia.component';
import { DashboardCompanyComponent } from './dashboard-company/dashboard-company.component';
import { CrearPasantiaPaso1Component } from './crear-pasantia-paso1/crear-pasantia-paso1.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateInternshipComponent } from './create-internship/create-internship.component';
import {MatStepperModule} from "@angular/material/stepper";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardStudentComponent,
    EditprofilestudentComponent,
    BuscarpasantiaComponent,
    DashboardCompanyComponent,
    CrearPasantiaPaso1Component,
    MyRequestsComponent,
    CreateInternshipComponent
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
    MatStepperModule

  ],
  providers: [],
  bootstrap: [DashboardCompanyComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
