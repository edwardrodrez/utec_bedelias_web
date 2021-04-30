import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalificacionExComponent } from './add-calificacion-ex.component';

describe('AddCalificacionExComponent', () => {
  let component: AddCalificacionExComponent;
  let fixture: ComponentFixture<AddCalificacionExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalificacionExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalificacionExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
