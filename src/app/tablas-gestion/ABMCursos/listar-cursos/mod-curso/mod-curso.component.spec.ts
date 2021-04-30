import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCursoComponent } from './mod-curso.component';

describe('ModCursoComponent', () => {
  let component: ModCursoComponent;
  let fixture: ComponentFixture<ModCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
