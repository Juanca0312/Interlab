import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindInternshipComponent } from './find-internship.component';

describe('FindInternshipComponent', () => {
  let component: FindInternshipComponent;
  let fixture: ComponentFixture<FindInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
