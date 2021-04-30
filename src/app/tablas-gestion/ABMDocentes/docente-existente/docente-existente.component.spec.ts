import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteExistenteComponent } from './docente-existente.component';

describe('DocenteExistenteComponent', () => {
  let component: DocenteExistenteComponent;
  let fixture: ComponentFixture<DocenteExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteExistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
