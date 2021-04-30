import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursoCarreraComponent } from './add-curso-carrera.component';

describe('AddCursoCarreraComponent', () => {
  let component: AddCursoCarreraComponent;
  let fixture: ComponentFixture<AddCursoCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCursoCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCursoCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
