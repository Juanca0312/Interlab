import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {
  showDropdown = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
}