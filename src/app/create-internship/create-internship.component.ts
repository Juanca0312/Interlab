import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import axios from "axios";

@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',
  styleUrls: ['./create-internship.component.css']
})
export class CreateInternshipComponent implements OnInit{

  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  name = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  salary = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  field = new FormControl('', [Validators.required]);
  semester = new FormControl('', [Validators.required]);
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a company name';
    }
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  getErrorMessageTitle() {
    if (this.title.hasError('required')) {
      return 'You must enter a title for your internship';
    }
    return this.title.hasError('title') ? 'Not a valid title' : '';
  }
  getErrorMessageLocation() {
    if (this.location.hasError('required')) {
      return 'You must enter a location';
    }
    return this.location.hasError('location') ? 'Not a valid location' : '';
  }

  getErrorMessageDescription() {
    if (this.description.hasError('required')) {
      return 'You must enter a description';
    }
    return this.description.hasError('description') ? 'Not a valid description' : '';
  }
  getErrorMessageField() {
    if (this.field.hasError('required')) {
      return 'You must enter a field for the intern';
    }
    return this.field.hasError('field') ? 'Not a valid field' : '';
  }
  getErrorMessageSemester() {
    if (this.semester.hasError('required')) {
      return 'You must enter a semester';
    }
    return this.semester.hasError('semester') ? 'Not a valid semester' : '';
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
        description: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      field: ['', Validators.required],
      semester: ['', Validators.required],
    });
  }
  createInternship(){
    console.log(this.secondFormGroup.value.description, this.firstFormGroup.value.title, this.firstFormGroup.value.location, this.firstFormGroup.value.salary);
    axios.post('https://interlab.azurewebsites.net/api/companies/1/internships', {
      state: "Available",
      description: this.secondFormGroup.value.description,
      startingDate: "",
      finishingDate: "",
      salary: this.firstFormGroup.value.salary,
      location: this.firstFormGroup.value.location,
      jobTitle: this.firstFormGroup.value.title,
      requiredDocuments: "",
    }).then(response => {
      console.log(response.data);
    });
  }
}
