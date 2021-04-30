import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreActasCursosComponent } from './cierre-actas-cursos.component';

describe('CierreActasCursosComponent', () => {
  let component: CierreActasCursosComponent;
  let fixture: ComponentFixture<CierreActasCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreActasCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreActasCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
