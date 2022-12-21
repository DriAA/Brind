import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStyleComponent } from './grid-style.component';

describe('GridStyleComponent', () => {
  let component: GridStyleComponent;
  let fixture: ComponentFixture<GridStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
