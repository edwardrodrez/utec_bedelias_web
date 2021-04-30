import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEscolaridadComponent } from './solicitar-escolaridad.component';

describe('SolicitarEscolaridadComponent', () => {
  let component: SolicitarEscolaridadComponent;
  let fixture: ComponentFixture<SolicitarEscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarEscolaridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarEscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
