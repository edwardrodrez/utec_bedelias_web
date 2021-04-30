import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreInscripcionesComponent } from './cierre-inscripciones.component';

describe('CierreInscripcionesComponent', () => {
  let component: CierreInscripcionesComponent;
  let fixture: ComponentFixture<CierreInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
