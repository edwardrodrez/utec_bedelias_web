import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarPostulanteComponent } from './informar-postulante.component';

describe('InformarPostulanteComponent', () => {
  let component: InformarPostulanteComponent;
  let fixture: ComponentFixture<InformarPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformarPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
