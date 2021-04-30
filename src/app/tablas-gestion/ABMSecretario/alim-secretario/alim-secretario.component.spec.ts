import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimSecretarioComponent } from './alim-secretario.component';

describe('AlimSecretarioComponent', () => {
  let component: AlimSecretarioComponent;
  let fixture: ComponentFixture<AlimSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimSecretarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
