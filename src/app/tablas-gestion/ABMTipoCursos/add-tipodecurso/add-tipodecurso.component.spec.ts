import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipodecursoComponent } from './add-tipodecurso.component';

describe('AddTipodecursoComponent', () => {
  let component: AddTipodecursoComponent;
  let fixture: ComponentFixture<AddTipodecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipodecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipodecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
