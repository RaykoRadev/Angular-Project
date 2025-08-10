import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCardView } from './load-card-view';

describe('LoadCardView', () => {
  let component: LoadCardView;
  let fixture: ComponentFixture<LoadCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadCardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadCardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
