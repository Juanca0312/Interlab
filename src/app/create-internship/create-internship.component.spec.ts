import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternshipComponent } from "./create-internship.component";

describe('CreateInternshipComponent', () => {
  let component: CreateInternshipComponent;
  let fixture: ComponentFixture<CreateInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInternshipComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
