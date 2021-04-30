import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecerFechaInscComponent } from './establecer-fecha-insc.component';

describe('EstablecerFechaInscComponent', () => {
  let component: EstablecerFechaInscComponent;
  let fixture: ComponentFixture<EstablecerFechaInscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablecerFechaInscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecerFechaInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
