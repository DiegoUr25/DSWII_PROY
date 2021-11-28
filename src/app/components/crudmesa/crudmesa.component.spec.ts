import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudmesaComponent } from './crudmesa.component';

describe('CrudmesaComponent', () => {
  let component: CrudmesaComponent;
  let fixture: ComponentFixture<CrudmesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudmesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
