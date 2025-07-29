import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCategory } from './nav-category.component';

describe('NavCategory', () => {
  let component: NavCategory;
  let fixture: ComponentFixture<NavCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(NavCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
