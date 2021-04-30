import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarCursosCarreraComponent } from './quitar-cursos-carrera.component';

describe('QuitarCursosCarreraComponent', () => {
  let component: QuitarCursosCarreraComponent;
  let fixture: ComponentFixture<QuitarCursosCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitarCursosCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarCursosCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
