import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimAreaComponent } from './elim-area.component';

describe('ElimAreaComponent', () => {
  let component: ElimAreaComponent;
  let fixture: ComponentFixture<ElimAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
