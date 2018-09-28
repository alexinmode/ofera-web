import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAlternativoComponent } from './slider-alternativo.component';

describe('SliderAlternativoComponent', () => {
  let component: SliderAlternativoComponent;
  let fixture: ComponentFixture<SliderAlternativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderAlternativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAlternativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
