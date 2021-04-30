import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabInscExamenComponent } from './estab-insc-examen.component';

describe('EstabInscExamenComponent', () => {
  let component: EstabInscExamenComponent;
  let fixture: ComponentFixture<EstabInscExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabInscExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabInscExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
