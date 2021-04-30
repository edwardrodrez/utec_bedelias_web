import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecretarioComponent } from './add-secretario.component';

describe('AddSecretarioComponent', () => {
  let component: AddSecretarioComponent;
  let fixture: ComponentFixture<AddSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecretarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
