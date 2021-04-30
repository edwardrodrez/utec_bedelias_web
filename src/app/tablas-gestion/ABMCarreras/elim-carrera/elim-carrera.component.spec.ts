import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimCarreraComponent } from './elim-carrera.component';

describe('ElimCarreraComponent', () => {
  let component: ElimCarreraComponent;
  let fixture: ComponentFixture<ElimCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
