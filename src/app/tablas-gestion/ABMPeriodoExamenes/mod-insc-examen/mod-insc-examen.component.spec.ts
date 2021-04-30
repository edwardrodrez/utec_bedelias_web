import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModInscExamenComponent } from './mod-insc-examen.component';

describe('ModInscExamenComponent', () => {
  let component: ModInscExamenComponent;
  let fixture: ComponentFixture<ModInscExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModInscExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModInscExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
