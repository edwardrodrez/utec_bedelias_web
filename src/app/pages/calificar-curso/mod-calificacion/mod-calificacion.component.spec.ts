import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCalificacionComponent } from './mod-calificacion.component';

describe('ModCalificacionComponent', () => {
  let component: ModCalificacionComponent;
  let fixture: ComponentFixture<ModCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCalificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
