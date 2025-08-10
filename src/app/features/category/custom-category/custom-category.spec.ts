import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCategory } from './custom-category';

describe('CustomCategory', () => {
  let component: CustomCategory;
  let fixture: ComponentFixture<CustomCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
