import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreservaComponent } from './addreserva.component';

describe('AddreservaComponent', () => {
  let component: AddreservaComponent;
  let fixture: ComponentFixture<AddreservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
