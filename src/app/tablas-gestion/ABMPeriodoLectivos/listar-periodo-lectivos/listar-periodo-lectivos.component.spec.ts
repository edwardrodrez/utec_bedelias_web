import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeriodoLectivosComponent } from './listar-periodo-lectivos.component';

describe('ListarPeriodoLectivosComponent', () => {
  let component: ListarPeriodoLectivosComponent;
  let fixture: ComponentFixture<ListarPeriodoLectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPeriodoLectivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeriodoLectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
