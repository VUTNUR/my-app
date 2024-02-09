import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciProjectComponent } from './calci-project.component';

describe('CalciProjectComponent', () => {
  let component: CalciProjectComponent;
  let fixture: ComponentFixture<CalciProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalciProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalciProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
