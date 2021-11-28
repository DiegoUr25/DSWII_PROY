import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmesaComponent } from './addmesa.component';

describe('AddmesaComponent', () => {
  let component: AddmesaComponent;
  let fixture: ComponentFixture<AddmesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
