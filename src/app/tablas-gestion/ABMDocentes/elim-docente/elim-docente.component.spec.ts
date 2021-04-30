import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimDocenteComponent } from './elim-docente.component';

describe('ElimDocenteComponent', () => {
  let component: ElimDocenteComponent;
  let fixture: ComponentFixture<ElimDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
