import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEscolaridadComponent } from './validar-escolaridad.component';

describe('ValidarEscolaridadComponent', () => {
  let component: ValidarEscolaridadComponent;
  let fixture: ComponentFixture<ValidarEscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarEscolaridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
