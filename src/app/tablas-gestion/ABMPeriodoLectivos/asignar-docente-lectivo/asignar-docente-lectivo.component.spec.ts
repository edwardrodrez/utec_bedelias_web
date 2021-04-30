import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDocenteLectivoComponent } from './asignar-docente-lectivo.component';

describe('AsignarDocenteLectivoComponent', () => {
  let component: AsignarDocenteLectivoComponent;
  let fixture: ComponentFixture<AsignarDocenteLectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarDocenteLectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDocenteLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
