import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {CreateInternshipComponent} from '../create-internship/create-internship.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.css']
})
export class DashboardCompanyComponent implements OnDestroy {

  declarations: [CreateInternshipComponent];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.showHome = true;
    this.showInternship = false;
    this.showCreateInternship = false;
  }
  mobileQuery: MediaQueryList;
  showHome: boolean;
  showInternship: boolean;
  showCreateInternship: boolean;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  mostrar(activo) {
    if (activo === 'Home') {
      console.log(localStorage.getItem('userId'));
      this.showHome = true;
      this.showInternship = false;
      this.showCreateInternship = false;
    }
    if (activo === 'Internship') {
      console.log(localStorage.getItem('userId'));
      this.showHome = false;
      this.showInternship = true;
      this.showCreateInternship = false;
    }
    if (activo === 'CreateInternship') {
      console.log(localStorage.getItem('userId'));
      this.showHome = false;
      this.showInternship = false;
      this.showCreateInternship = true;
    }
  }

  Logout() {
    console.log('salir');
    this.router.navigateByUrl('login');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
