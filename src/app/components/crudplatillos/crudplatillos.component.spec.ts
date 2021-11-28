import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudplatillosComponent } from './crudplatillos.component';

describe('CrudplatillosComponent', () => {
  let component: CrudplatillosComponent;
  let fixture: ComponentFixture<CrudplatillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudplatillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudplatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
