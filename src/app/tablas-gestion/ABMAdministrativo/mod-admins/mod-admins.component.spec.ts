import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdminsComponent } from './mod-admins.component';

describe('ModAdminsComponent', () => {
  let component: ModAdminsComponent;
  let fixture: ComponentFixture<ModAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
