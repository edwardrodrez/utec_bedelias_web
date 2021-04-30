import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretarioNuevoComponent } from './secretario-nuevo.component';

describe('SecretarioNuevoComponent', () => {
  let component: SecretarioNuevoComponent;
  let fixture: ComponentFixture<SecretarioNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretarioNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretarioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
