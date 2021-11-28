import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsocioComponent } from './addsocio.component';

describe('AddsocioComponent', () => {
  let component: AddsocioComponent;
  let fixture: ComponentFixture<AddsocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
