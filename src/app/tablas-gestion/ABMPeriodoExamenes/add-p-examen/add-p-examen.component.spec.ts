import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPExamenComponent } from './add-p-examen.component';

describe('AddPExamenComponent', () => {
  let component: AddPExamenComponent;
  let fixture: ComponentFixture<AddPExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
