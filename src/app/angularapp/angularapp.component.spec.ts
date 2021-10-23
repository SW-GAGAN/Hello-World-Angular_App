import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularappComponent } from './angularapp.component';

describe('AngularappComponent', () => {
  let component: AngularappComponent;
  let fixture: ComponentFixture<AngularappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
