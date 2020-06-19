import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilestudentComponent } from './editprofilestudent.component';

describe('EditprofilestudentComponent', () => {
  let component: EditprofilestudentComponent;
  let fixture: ComponentFixture<EditprofilestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofilestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
