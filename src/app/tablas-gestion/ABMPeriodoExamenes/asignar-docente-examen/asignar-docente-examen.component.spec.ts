import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDocenteExamenComponent } from './asignar-docente-examen.component';

describe('AsignarDocenteExamenComponent', () => {
  let component: AsignarDocenteExamenComponent;
  let fixture: ComponentFixture<AsignarDocenteExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarDocenteExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDocenteExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
