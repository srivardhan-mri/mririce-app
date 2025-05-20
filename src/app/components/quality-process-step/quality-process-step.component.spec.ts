import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityProcessStepComponent } from './quality-process-step.component';

describe('QualityProcessStepComponent', () => {
  let component: QualityProcessStepComponent;
  let fixture: ComponentFixture<QualityProcessStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityProcessStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityProcessStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
