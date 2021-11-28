import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplatillosComponent } from './addplatillos.component';

describe('AddplatillosComponent', () => {
  let component: AddplatillosComponent;
  let fixture: ComponentFixture<AddplatillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplatillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
