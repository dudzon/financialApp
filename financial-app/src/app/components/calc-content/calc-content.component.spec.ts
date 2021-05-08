import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcContentComponent } from './calc-content.component';

describe('CalcContentComponent', () => {
  let component: CalcContentComponent;
  let fixture: ComponentFixture<CalcContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
