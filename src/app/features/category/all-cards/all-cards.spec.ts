import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCards } from './all-cards';

describe('AllCards', () => {
  let component: AllCards;
  let fixture: ComponentFixture<AllCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
