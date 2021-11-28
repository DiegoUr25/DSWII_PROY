import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsocioComponent } from './crudsocio.component';

describe('CrudsocioComponent', () => {
  let component: CrudsocioComponent;
  let fixture: ComponentFixture<CrudsocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudsocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudsocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
