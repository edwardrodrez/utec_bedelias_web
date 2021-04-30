import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCertificadosComponent } from './gestion-certificados.component';

describe('GestionCertificadosComponent', () => {
  let component: GestionCertificadosComponent;
  let fixture: ComponentFixture<GestionCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCertificadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
