import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPExamenComponent } from './mod-p-examen.component';

describe('ModPExamenComponent', () => {
  let component: ModPExamenComponent;
  let fixture: ComponentFixture<ModPExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
