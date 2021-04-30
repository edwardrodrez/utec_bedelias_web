import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimPInscripcionesComponent } from './elim-p-inscripciones.component';

describe('ElimPInscripcionesComponent', () => {
  let component: ElimPInscripcionesComponent;
  let fixture: ComponentFixture<ElimPInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimPInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimPInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
