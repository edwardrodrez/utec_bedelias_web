import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarExamenComponent } from './calificar-examen.component';

describe('CalificarExamenComponent', () => {
  let component: CalificarExamenComponent;
  let fixture: ComponentFixture<CalificarExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
