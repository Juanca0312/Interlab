import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aver = "aver";
  aver2 = "aver2";
  hide1 = true;
  hide2 = true;
  constructor() {

  }

  ngOnInit(): void {
  }

}
