import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDoughnutComponent } from './results-doughnut.component';

describe('ResultsDoughnutComponent', () => {
  let component: ResultsDoughnutComponent;
  let fixture: ComponentFixture<ResultsDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDoughnutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
