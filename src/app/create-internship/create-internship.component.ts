import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  description = new FormControl('', [Validators.required]);

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return this.name.hasError('name') ? 'Not a valid title' : '';
  }
  getErrorMessageTitle() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }
    return this.title.hasError('title') ? 'Not a valid title' : '';
  }
  getErrorMessageLocation() {
    if (this.location.hasError('required')) {
      return 'You must enter a value';
    }
    return this.title.hasError('title') ? 'Not a valid title' : '';
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      ubic: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
        description: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      description: ['', Validators.required],
    });
  }
}
