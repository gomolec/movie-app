import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscoverMoviesGrid } from './discover-movies-grid';

describe('DiscoverMoviesGrid', () => {
  let component: DiscoverMoviesGrid;
  let fixture: ComponentFixture<DiscoverMoviesGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMoviesGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverMoviesGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
