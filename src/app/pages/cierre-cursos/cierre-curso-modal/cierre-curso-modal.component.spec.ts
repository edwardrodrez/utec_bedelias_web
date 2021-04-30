import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreCursoModalComponent } from './cierre-curso-modal.component';

describe('CierreCursoModalComponent', () => {
  let component: CierreCursoModalComponent;
  let fixture: ComponentFixture<CierreCursoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreCursoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreCursoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
