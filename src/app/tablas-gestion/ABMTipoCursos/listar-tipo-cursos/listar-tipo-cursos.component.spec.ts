import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoCursosComponent } from './listar-tipo-cursos.component';

describe('ListarTipoCursosComponent', () => {
  let component: ListarTipoCursosComponent;
  let fixture: ComponentFixture<ListarTipoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
