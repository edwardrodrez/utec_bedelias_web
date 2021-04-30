import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCarreraComponent } from './incluir-carrera.component';

describe('IncluirCarreraComponent', () => {
  let component: IncluirCarreraComponent;
  let fixture: ComponentFixture<IncluirCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
