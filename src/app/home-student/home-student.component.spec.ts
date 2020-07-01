import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStudentComponent } from './home-student.component';

describe('HomeStudentComponent', () => {
  let component: HomeStudentComponent;
  let fixture: ComponentFixture<HomeStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
