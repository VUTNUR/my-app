import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsCalciComponent } from './operations-calci.component';

describe('OperationsCalciComponent', () => {
  let component: OperationsCalciComponent;
  let fixture: ComponentFixture<OperationsCalciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsCalciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsCalciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
