import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRecipies } from './more-recipies';

describe('MoreRecipies', () => {
  let component: MoreRecipies;
  let fixture: ComponentFixture<MoreRecipies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreRecipies],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreRecipies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
