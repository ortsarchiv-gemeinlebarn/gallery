import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionItemComponent } from './gallery-section-item.component';

describe('GallerySectionItemComponent', () => {
  let component: GallerySectionItemComponent;
  let fixture: ComponentFixture<GallerySectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySectionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
