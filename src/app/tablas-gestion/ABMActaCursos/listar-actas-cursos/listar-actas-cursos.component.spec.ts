import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActasCursosComponent } from './listar-actas-cursos.component';

describe('ListarActasCursosComponent', () => {
  let component: ListarActasCursosComponent;
  let fixture: ComponentFixture<ListarActasCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarActasCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActasCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
