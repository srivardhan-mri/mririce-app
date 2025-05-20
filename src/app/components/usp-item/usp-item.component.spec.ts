import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspItemComponent } from './usp-item.component';

describe('UspItemComponent', () => {
  let component: UspItemComponent;
  let fixture: ComponentFixture<UspItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UspItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UspItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
