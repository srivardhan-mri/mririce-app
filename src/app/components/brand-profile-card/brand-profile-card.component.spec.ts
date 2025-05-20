import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandProfileCardComponent } from './brand-profile-card.component';

describe('BrandProfileCardComponent', () => {
  let component: BrandProfileCardComponent;
  let fixture: ComponentFixture<BrandProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandProfileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
