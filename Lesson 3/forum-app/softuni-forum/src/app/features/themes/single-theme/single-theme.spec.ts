import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTheme } from './single-theme.component';

describe('SingleTheme', () => {
  let component: SingleTheme;
  let fixture: ComponentFixture<SingleTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTheme],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
