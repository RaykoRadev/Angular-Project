import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCard } from './create-card.component';

describe('CreateCard', () => {
  let component: CreateCard;
  let fixture: ComponentFixture<CreateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
