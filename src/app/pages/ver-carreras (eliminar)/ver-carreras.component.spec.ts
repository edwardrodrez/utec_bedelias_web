import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarrerasComponent } from './ver-carreras.component';

describe('VerCarrerasComponent', () => {
  let component: VerCarrerasComponent;
  let fixture: ComponentFixture<VerCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCarrerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
