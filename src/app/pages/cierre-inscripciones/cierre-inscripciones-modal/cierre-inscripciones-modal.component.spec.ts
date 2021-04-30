import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreInscripcionesModalComponent } from './cierre-inscripciones-modal.component';

describe('CierreInscripcionesModalComponent', () => {
  let component: CierreInscripcionesModalComponent;
  let fixture: ComponentFixture<CierreInscripcionesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreInscripcionesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreInscripcionesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
