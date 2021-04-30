import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazarPostulanteComponent } from './rechazar-postulante.component';

describe('RechazarPostulanteComponent', () => {
  let component: RechazarPostulanteComponent;
  let fixture: ComponentFixture<RechazarPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechazarPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechazarPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
