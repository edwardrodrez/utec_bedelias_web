import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreTodasActasComponent } from './cierre-todas-actas.component';

describe('CierreTodasActasComponent', () => {
  let component: CierreTodasActasComponent;
  let fixture: ComponentFixture<CierreTodasActasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreTodasActasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreTodasActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
