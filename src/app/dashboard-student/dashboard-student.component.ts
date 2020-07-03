import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {EditprofilestudentComponent} from '../editprofilestudent/editprofilestudent.component';
import {MyRequestsComponent} from '../my-requests/my-requests.component';
import {FindInternshipComponent} from '../find-internship/find-internship.component';
import {HomeStudentComponent} from '../home-student/home-student.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {
  checked = false;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () =>
    `no repitas`);

  showFiller = false;
  @ViewChild('dashboard-student', {static: false} )
  dashboardStudentForm: NgForm;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'state', 'description', 'publicationDate', 'startingDate', 'finishingDate', 'salary'];

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  isEditMode = false;

  declarations: [FindInternshipComponent, EditprofilestudentComponent, MyRequestsComponent, HomeStudentComponent];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.showHome = true;
    this.showMyRequests = false;
    this.showEditProfile = false;
    this.showFindInternship = false;
  }
  mobileQuery: MediaQueryList;
  showHome: boolean;
  showMyRequests: boolean;
  showEditProfile: boolean;
  showFindInternship: boolean;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  mostrar(activo) {
    if (activo === 'Dashboard') {
      this.showHome = true;
      this.showMyRequests = false;
      this.showEditProfile = false;
      this.showFindInternship = false;
    }
    if (activo === 'MyRequests') {
      this.showHome = false;
      this.showMyRequests = true;
      this.showEditProfile = false;
      this.showFindInternship = false;
    }
    if (activo === 'Edit_profile') {
      this.showHome = false;
      this.showMyRequests = false;
      this.showEditProfile = true;
      this.showFindInternship = false;
    }
    if (activo === 'FindInternship') {
      this.showHome = false;
      this.showMyRequests = false;
      this.showEditProfile = false;
      this.showFindInternship = true;
    }
  }
  Logout() {
    console.log('salir');
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
