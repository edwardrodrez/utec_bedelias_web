import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeriodoInscripcionComponent } from './listar-periodo-inscripcion.component';

describe('ListarPeriodoInscripcionComponent', () => {
  let component: ListarPeriodoInscripcionComponent;
  let fixture: ComponentFixture<ListarPeriodoInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPeriodoInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeriodoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
