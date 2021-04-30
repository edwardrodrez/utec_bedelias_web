import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarCursoComponent } from './calificar-curso.component';

describe('CalificarCursoComponent', () => {
  let component: CalificarCursoComponent;
  let fixture: ComponentFixture<CalificarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
