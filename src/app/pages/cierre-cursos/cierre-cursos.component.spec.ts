import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreCursosComponent } from './cierre-cursos.component';

describe('CierreCursosComponent', () => {
  let component: CierreCursosComponent;
  let fixture: ComponentFixture<CierreCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
