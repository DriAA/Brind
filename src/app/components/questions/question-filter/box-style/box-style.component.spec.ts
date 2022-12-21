import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxStyleComponent } from './box-style.component';

describe('BoxStyleComponent', () => {
  let component: BoxStyleComponent;
  let fixture: ComponentFixture<BoxStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
