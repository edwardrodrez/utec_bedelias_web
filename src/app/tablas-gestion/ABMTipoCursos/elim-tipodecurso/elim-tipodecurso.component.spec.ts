import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimTipodecursoComponent } from './elim-tipodecurso.component';

describe('ElimTipodecursoComponent', () => {
  let component: ElimTipodecursoComponent;
  let fixture: ComponentFixture<ElimTipodecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimTipodecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimTipodecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
