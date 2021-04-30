import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreExamenModalComponent } from './cierre-examen-modal.component';

describe('CierreExamenModalComponent', () => {
  let component: CierreExamenModalComponent;
  let fixture: ComponentFixture<CierreExamenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreExamenModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreExamenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
