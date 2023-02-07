import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingSecondComponent } from './lazy-loading-second.component';

describe('LazyLoadingSecondComponent', () => {
  let component: LazyLoadingSecondComponent;
  let fixture: ComponentFixture<LazyLoadingSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadingSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
