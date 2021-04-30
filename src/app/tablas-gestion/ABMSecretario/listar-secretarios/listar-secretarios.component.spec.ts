import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSecretariosComponent } from './listar-secretarios.component';

describe('ListarSecretariosComponent', () => {
  let component: ListarSecretariosComponent;
  let fixture: ComponentFixture<ListarSecretariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSecretariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSecretariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
