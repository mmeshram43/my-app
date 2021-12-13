import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackFormComponent } from './callback-form.component';

describe('CallbackFormComponent', () => {
  let component: CallbackFormComponent;
  let fixture: ComponentFixture<CallbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
