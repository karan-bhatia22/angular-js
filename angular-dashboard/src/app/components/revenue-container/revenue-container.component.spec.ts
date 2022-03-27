import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueContainerComponent } from './revenue-container.component';

describe('RevenueContainerComponent', () => {
  let component: RevenueContainerComponent;
  let fixture: ComponentFixture<RevenueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
