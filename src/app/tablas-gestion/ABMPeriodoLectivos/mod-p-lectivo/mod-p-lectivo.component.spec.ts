import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPLectivoComponent } from './mod-p-lectivo.component';

describe('ModPLectivoComponent', () => {
  let component: ModPLectivoComponent;
  let fixture: ComponentFixture<ModPLectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPLectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
