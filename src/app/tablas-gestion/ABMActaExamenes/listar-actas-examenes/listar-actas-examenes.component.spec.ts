import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActasExamenesComponent } from './listar-actas-examenes.component';

describe('ListarActasExamenesComponent', () => {
  let component: ListarActasExamenesComponent;
  let fixture: ComponentFixture<ListarActasExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarActasExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActasExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
