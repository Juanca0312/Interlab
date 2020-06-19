import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn} from '@angular/forms';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

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
