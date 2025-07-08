import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baptism } from './baptism';

describe('Baptism', () => {
  let component: Baptism;
  let fixture: ComponentFixture<Baptism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Baptism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baptism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
