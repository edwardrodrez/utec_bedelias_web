import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPLectivoComponent } from './add-p-lectivo.component';

describe('AddPLectivoComponent', () => {
  let component: AddPLectivoComponent;
  let fixture: ComponentFixture<AddPLectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPLectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
