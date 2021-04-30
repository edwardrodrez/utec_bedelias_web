import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClaseAsistenciaComponent } from './add-clase-asistencia.component';

describe('AddClaseAsistenciaComponent', () => {
  let component: AddClaseAsistenciaComponent;
  let fixture: ComponentFixture<AddClaseAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClaseAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClaseAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
