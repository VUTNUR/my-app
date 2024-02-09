import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalciComponent } from './input-calci.component';

describe('InputCalciComponent', () => {
  let component: InputCalciComponent;
  let fixture: ComponentFixture<InputCalciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCalciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCalciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
