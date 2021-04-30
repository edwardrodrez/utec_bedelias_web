import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonarPLectivoComponent } from './clonar-p-lectivo.component';

describe('ClonarPLectivoComponent', () => {
  let component: ClonarPLectivoComponent;
  let fixture: ComponentFixture<ClonarPLectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonarPLectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonarPLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
