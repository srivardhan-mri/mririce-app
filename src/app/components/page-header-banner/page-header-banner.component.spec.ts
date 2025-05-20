import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderBannerComponent } from './page-header-banner.component';

describe('PageHeaderBannerComponent', () => {
  let component: PageHeaderBannerComponent;
  let fixture: ComponentFixture<PageHeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
