import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCalificacionExComponent } from './mod-calificacion-ex.component';

describe('ModCalificacionExComponent', () => {
  let component: ModCalificacionExComponent;
  let fixture: ComponentFixture<ModCalificacionExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCalificacionExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCalificacionExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
