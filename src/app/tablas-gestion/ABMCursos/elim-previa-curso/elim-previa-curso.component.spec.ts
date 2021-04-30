import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimPreviaCursoComponent } from './elim-previa-curso.component';

describe('ElimPreviaCursoComponent', () => {
  let component: ElimPreviaCursoComponent;
  let fixture: ComponentFixture<ElimPreviaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimPreviaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimPreviaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
