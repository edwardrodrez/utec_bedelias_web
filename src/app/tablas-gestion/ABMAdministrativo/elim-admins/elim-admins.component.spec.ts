import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimAdminsComponent } from './elim-admins.component';

describe('ElimAdminsComponent', () => {
  let component: ElimAdminsComponent;
  let fixture: ComponentFixture<ElimAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
