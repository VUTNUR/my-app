import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCalciComponent } from './results-calci.component';

describe('ResultsCalciComponent', () => {
  let component: ResultsCalciComponent;
  let fixture: ComponentFixture<ResultsCalciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsCalciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsCalciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
