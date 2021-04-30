import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSedeComponent } from './modificar-sede.component';

describe('ModificarSedeComponent', () => {
  let component: ModificarSedeComponent;
  let fixture: ComponentFixture<ModificarSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
