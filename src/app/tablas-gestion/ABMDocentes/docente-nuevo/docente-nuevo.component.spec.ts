import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteNuevoComponent } from './docente-nuevo.component';

describe('DocenteNuevoComponent', () => {
  let component: DocenteNuevoComponent;
  let fixture: ComponentFixture<DocenteNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
