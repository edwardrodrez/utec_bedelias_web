import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonarExamenComponent } from './clonar-examen.component';

describe('ClonarExamenComponent', () => {
  let component: ClonarExamenComponent;
  let fixture: ComponentFixture<ClonarExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonarExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
