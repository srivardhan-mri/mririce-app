import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueItemComponent } from './value-item.component';

describe('ValueItemComponent', () => {
  let component: ValueItemComponent;
  let fixture: ComponentFixture<ValueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
