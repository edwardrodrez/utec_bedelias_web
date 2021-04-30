import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditosminimosComponent } from './add-creditosminimos.component';

describe('AddCreditosminimosComponent', () => {
  let component: AddCreditosminimosComponent;
  let fixture: ComponentFixture<AddCreditosminimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditosminimosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditosminimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
