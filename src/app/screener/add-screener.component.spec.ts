import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreenerComponent } from './add-screener.component';

describe('AddScreenerComponent', () => {
  let component: AddScreenerComponent;
  let fixture: ComponentFixture<AddScreenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScreenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
