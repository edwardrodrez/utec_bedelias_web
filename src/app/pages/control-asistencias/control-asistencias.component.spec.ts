import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAsistenciasComponent } from './control-asistencias.component';

describe('ControlAsistenciasComponent', () => {
  let component: ControlAsistenciasComponent;
  let fixture: ComponentFixture<ControlAsistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAsistenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAsistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
