import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCarreraComponent } from './mod-carrera.component';

describe('ModCarreraComponent', () => {
  let component: ModCarreraComponent;
  let fixture: ComponentFixture<ModCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
