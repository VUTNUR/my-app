import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredPlayComponent } from './bored-play.component';

describe('BoredPlayComponent', () => {
  let component: BoredPlayComponent;
  let fixture: ComponentFixture<BoredPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
