import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPasantiaPaso1Component } from './crear-pasantia-paso1.component';

describe('CrearPasantiaPaso1Component', () => {
  let component: CrearPasantiaPaso1Component;
  let fixture: ComponentFixture<CrearPasantiaPaso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPasantiaPaso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPasantiaPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
