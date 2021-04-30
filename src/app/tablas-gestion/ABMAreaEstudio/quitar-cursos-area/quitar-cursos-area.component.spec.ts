import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarCursosAreaComponent } from './quitar-cursos-area.component';

describe('QuitarCursosAreaComponent', () => {
  let component: QuitarCursosAreaComponent;
  let fixture: ComponentFixture<QuitarCursosAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitarCursosAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarCursosAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
