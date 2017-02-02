/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KendoChartComponent } from './kendo-chart.component';

describe('KendoChartComponent', () => {
  let component: KendoChartComponent;
  let fixture: ComponentFixture<KendoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
