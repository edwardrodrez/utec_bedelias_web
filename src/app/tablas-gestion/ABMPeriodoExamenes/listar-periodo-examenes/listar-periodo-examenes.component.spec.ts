import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeriodoExamenesComponent } from './listar-periodo-examenes.component';

describe('ListarPeriodoExamenesComponent', () => {
  let component: ListarPeriodoExamenesComponent;
  let fixture: ComponentFixture<ListarPeriodoExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPeriodoExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeriodoExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
