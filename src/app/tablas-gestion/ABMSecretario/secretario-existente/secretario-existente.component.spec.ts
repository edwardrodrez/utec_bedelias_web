import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretarioExistenteComponent } from './secretario-existente.component';

describe('SecretarioExistenteComponent', () => {
  let component: SecretarioExistenteComponent;
  let fixture: ComponentFixture<SecretarioExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretarioExistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretarioExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
