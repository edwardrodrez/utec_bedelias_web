import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTipodecursoComponent } from './mod-tipodecurso.component';

describe('ModTipodecursoComponent', () => {
  let component: ModTipodecursoComponent;
  let fixture: ComponentFixture<ModTipodecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModTipodecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTipodecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
