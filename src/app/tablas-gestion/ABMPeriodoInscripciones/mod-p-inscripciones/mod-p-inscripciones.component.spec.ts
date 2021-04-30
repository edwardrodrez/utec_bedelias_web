import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPInscripcionesComponent } from './mod-p-inscripciones.component';

describe('ModPInscripcionesComponent', () => {
  let component: ModPInscripcionesComponent;
  let fixture: ComponentFixture<ModPInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
