import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreviaCursoComponent } from './add-previa-curso.component';

describe('AddPreviaCursoComponent', () => {
  let component: AddPreviaCursoComponent;
  let fixture: ComponentFixture<AddPreviaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPreviaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPreviaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
