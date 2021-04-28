import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldBuilderComponent } from './form-field-builder.component';

describe('FormFieldBuilderComponent', () => {
  let component: FormFieldBuilderComponent;
  let fixture: ComponentFixture<FormFieldBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
