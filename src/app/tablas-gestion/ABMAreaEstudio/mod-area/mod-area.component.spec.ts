import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAreaComponent } from './mod-area.component';

describe('ModAreaComponent', () => {
  let component: ModAreaComponent;
  let fixture: ComponentFixture<ModAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
