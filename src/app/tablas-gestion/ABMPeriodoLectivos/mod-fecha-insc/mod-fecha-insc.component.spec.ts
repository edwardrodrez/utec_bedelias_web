import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFechaInscComponent } from './mod-fecha-insc.component';

describe('ModFechaInscComponent', () => {
  let component: ModFechaInscComponent;
  let fixture: ComponentFixture<ModFechaInscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModFechaInscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModFechaInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
