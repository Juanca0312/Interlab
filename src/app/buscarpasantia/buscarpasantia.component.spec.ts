import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpasantiaComponent } from './buscarpasantia.component';

describe('BuscarpasantiaComponent', () => {
  let component: BuscarpasantiaComponent;
  let fixture: ComponentFixture<BuscarpasantiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarpasantiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
