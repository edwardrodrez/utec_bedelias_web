import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPInscripcionesComponent } from './add-p-inscripciones.component';

describe('AddPInscripcionesComponent', () => {
  let component: AddPInscripcionesComponent;
  let fixture: ComponentFixture<AddPInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
