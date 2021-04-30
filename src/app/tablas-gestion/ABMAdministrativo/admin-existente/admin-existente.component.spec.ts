import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExistenteComponent } from './admin-existente.component';

describe('AdminExistenteComponent', () => {
  let component: AdminExistenteComponent;
  let fixture: ComponentFixture<AdminExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
