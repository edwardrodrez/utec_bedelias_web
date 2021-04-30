import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreExamenesComponent } from './cierre-examenes.component';

describe('CierreExamenesComponent', () => {
  let component: CierreExamenesComponent;
  let fixture: ComponentFixture<CierreExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
