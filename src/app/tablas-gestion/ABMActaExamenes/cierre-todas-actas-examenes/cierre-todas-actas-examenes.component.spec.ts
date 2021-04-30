import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreTodasActasExamenesComponent } from './cierre-todas-actas-examenes.component';

describe('CierreTodasActasExamenesComponent', () => {
  let component: CierreTodasActasExamenesComponent;
  let fixture: ComponentFixture<CierreTodasActasExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreTodasActasExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreTodasActasExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
