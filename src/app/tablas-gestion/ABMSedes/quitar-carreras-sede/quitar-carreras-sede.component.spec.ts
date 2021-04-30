import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarCarrerasSedeComponent } from './quitar-carreras-sede.component';

describe('QuitarCarrerasSedeComponent', () => {
  let component: QuitarCarrerasSedeComponent;
  let fixture: ComponentFixture<QuitarCarrerasSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitarCarrerasSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarCarrerasSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
