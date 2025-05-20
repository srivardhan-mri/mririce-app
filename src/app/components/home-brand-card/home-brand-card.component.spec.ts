import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrandCardComponent } from './home-brand-card.component';

describe('HomeBrandCardComponent', () => {
  let component: HomeBrandCardComponent;
  let fixture: ComponentFixture<HomeBrandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBrandCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBrandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
