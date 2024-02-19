import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesSingleComponent } from './case-studies-single.component';

describe('CaseStudiesSingleComponent', () => {
  let component: CaseStudiesSingleComponent;
  let fixture: ComponentFixture<CaseStudiesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseStudiesSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseStudiesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
