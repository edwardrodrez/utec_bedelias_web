import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFechaInscComponent } from './ver-fecha-insc.component';

describe('VerFechaInscComponent', () => {
  let component: VerFechaInscComponent;
  let fixture: ComponentFixture<VerFechaInscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFechaInscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFechaInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
