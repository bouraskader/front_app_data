import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTempVizComponent } from './data-temp-viz.component';

describe('DataTempVizComponent', () => {
  let component: DataTempVizComponent;
  let fixture: ComponentFixture<DataTempVizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTempVizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTempVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
