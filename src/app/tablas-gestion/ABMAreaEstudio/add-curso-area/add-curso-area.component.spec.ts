import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCursoAreaComponent } from './add-curso-area.component';

describe('AddCursoAreaComponent', () => {
  let component: AddCursoAreaComponent;
  let fixture: ComponentFixture<AddCursoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCursoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCursoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
