import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadingDivider } from './heading-divider';

describe('HeadingDivider', () => {
  let component: HeadingDivider;
  let fixture: ComponentFixture<HeadingDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingDivider],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadingDivider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
