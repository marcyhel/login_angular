import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FildCustonComponent } from './fild-custon.component';

describe('FildCustonComponent', () => {
  let component: FildCustonComponent;
  let fixture: ComponentFixture<FildCustonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FildCustonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FildCustonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
