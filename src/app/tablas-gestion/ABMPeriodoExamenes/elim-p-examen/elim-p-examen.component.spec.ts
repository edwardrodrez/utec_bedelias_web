import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimPExamenComponent } from './elim-p-examen.component';

describe('ElimPExamenComponent', () => {
  let component: ElimPExamenComponent;
  let fixture: ComponentFixture<ElimPExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimPExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimPExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
