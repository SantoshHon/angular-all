import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAltertComponent } from './success-altert.component';

describe('SuccessAltertComponent', () => {
  let component: SuccessAltertComponent;
  let fixture: ComponentFixture<SuccessAltertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAltertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAltertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
