import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimCursoComponent } from './elim-curso.component';

describe('ElimCursoComponent', () => {
  let component: ElimCursoComponent;
  let fixture: ComponentFixture<ElimCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
