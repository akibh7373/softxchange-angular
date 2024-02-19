import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformFeaturesCardComponent } from './platform-features-card.component';

describe('PlatformFeaturesCardComponent', () => {
  let component: PlatformFeaturesCardComponent;
  let fixture: ComponentFixture<PlatformFeaturesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformFeaturesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformFeaturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
