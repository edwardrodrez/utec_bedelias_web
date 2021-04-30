import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSecretarioComponent } from './mod-secretario.component';

describe('ModSecretarioComponent', () => {
  let component: ModSecretarioComponent;
  let fixture: ComponentFixture<ModSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModSecretarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
