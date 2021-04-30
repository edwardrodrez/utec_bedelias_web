import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreActasExamenesComponent } from './cierre-actas-examenes.component';

describe('CierreActasExamenesComponent', () => {
  let component: CierreActasExamenesComponent;
  let fixture: ComponentFixture<CierreActasExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreActasExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreActasExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
