import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCustonComponent } from './button-custon.component';

describe('ButtonCustonComponent', () => {
  let component: ButtonCustonComponent;
  let fixture: ComponentFixture<ButtonCustonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCustonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCustonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
