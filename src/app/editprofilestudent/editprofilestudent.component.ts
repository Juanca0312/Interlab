import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editprofilestudent',
  templateUrl: './editprofilestudent.component.html',
  styleUrls: ['./editprofilestudent.component.css']
})
export class EditprofilestudentComponent implements OnDestroy {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, fb: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  shouldRun = true;
  sector = new FormControl('', [Validators.required]);
  ciclo = new FormControl('', [Validators.required]);
  universidad = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.sector.hasError('required')) {
      return 'You must select a value';
    }
    if (this.ciclo.hasError('required')) {
      return 'You must select a value';
    }
    if (this.universidad.hasError('required')) {
      return 'You must select a value';
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
