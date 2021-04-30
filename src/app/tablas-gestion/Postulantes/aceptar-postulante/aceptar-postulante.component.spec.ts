import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarPostulanteComponent } from './aceptar-postulante.component';

describe('AceptarPostulanteComponent', () => {
  let component: AceptarPostulanteComponent;
  let fixture: ComponentFixture<AceptarPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
