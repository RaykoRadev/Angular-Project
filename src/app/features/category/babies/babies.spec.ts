import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babies } from './babies';

describe('Babies', () => {
  let component: Babies;
  let fixture: ComponentFixture<Babies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Babies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Babies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
