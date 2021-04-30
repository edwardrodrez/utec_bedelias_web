import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPostulacionComponent } from './validar-postulacion.component';

describe('ValidarPostulacionComponent', () => {
  let component: ValidarPostulacionComponent;
  let fixture: ComponentFixture<ValidarPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarPostulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
