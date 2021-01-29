import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {
  hide1 = true;
  username = 'student@gmail.com';
  name = 'Jhon Student';
  password = 'demopassword';
  companyId = null;
  userId = null;

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('student@gmail.com'),
    password: new FormControl('demopassword'),
  });

  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }

  login() {
    // localStorage.setItem('firstName', this.name);
    this.router.navigateByUrl('/dashboardStudent');
    //this.router.navigateByUrl('/dashboardCompany');
  }
  getUsername(event: any) { // without type info
    this.username = event.target.value;
  }
  getPassword(event: any) { // without type info
    this.password = event.target.value;
  }
}
