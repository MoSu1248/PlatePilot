import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepTimeComponent } from './prep-time-component';

describe('PrepTimeComponent', () => {
  let component: PrepTimeComponent;
  let fixture: ComponentFixture<PrepTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepTimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrepTimeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
