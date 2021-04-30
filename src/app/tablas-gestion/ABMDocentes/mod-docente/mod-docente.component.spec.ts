import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDocenteComponent } from './mod-docente.component';

describe('ModDocenteComponent', () => {
  let component: ModDocenteComponent;
  let fixture: ComponentFixture<ModDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
