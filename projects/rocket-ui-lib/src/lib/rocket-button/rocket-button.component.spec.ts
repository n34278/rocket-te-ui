import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketButtonComponent } from './carbon-button.component';

describe('CarbonButtonComponent', () => {
  let component: RocketButtonComponent;
  let fixture: ComponentFixture<RocketButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
