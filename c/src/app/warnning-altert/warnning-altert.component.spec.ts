import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnningAltertComponent } from './warnning-altert.component';

describe('WarnningAltertComponent', () => {
  let component: WarnningAltertComponent;
  let fixture: ComponentFixture<WarnningAltertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnningAltertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnningAltertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
