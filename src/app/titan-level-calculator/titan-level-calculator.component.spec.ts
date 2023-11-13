import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanLevelCalculatorComponent } from './titan-level-calculator.component';

describe('TitanLevelCalculatorComponent', () => {
  let component: TitanLevelCalculatorComponent;
  let fixture: ComponentFixture<TitanLevelCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitanLevelCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitanLevelCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
