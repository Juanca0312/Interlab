import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-pasantia-paso1',
  templateUrl: './crear-pasantia-paso1.component.html',
  styleUrls: ['./crear-pasantia-paso1.component.css']
})
export class CrearPasantiaPaso1Component{

  constructor() { }
  name = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  ubic = new FormControl('', [Validators.required]);

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
  getErrorMessageUbic() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }
    return this.title.hasError('title') ? 'Not a valid title' : '';
  }
}
