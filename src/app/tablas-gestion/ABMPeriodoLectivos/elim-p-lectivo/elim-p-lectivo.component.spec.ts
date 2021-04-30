import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimPLectivoComponent } from './elim-p-lectivo.component';

describe('ElimPLectivoComponent', () => {
  let component: ElimPLectivoComponent;
  let fixture: ComponentFixture<ElimPLectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimPLectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimPLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
