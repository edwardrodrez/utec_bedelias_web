import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNuevoComponent } from './admin-nuevo.component';

describe('AdminNuevoComponent', () => {
  let component: AdminNuevoComponent;
  let fixture: ComponentFixture<AdminNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
