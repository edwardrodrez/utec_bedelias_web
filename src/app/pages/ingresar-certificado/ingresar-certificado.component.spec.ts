import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCertificadoComponent } from './ingresar-certificado.component';

describe('IngresarCertificadoComponent', () => {
  let component: IngresarCertificadoComponent;
  let fixture: ComponentFixture<IngresarCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarCertificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
