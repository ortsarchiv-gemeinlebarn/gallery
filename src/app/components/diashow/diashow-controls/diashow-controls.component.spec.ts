import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiashowControlsComponent } from './diashow-controls.component';

describe('DiashowControlsComponent', () => {
  let component: DiashowControlsComponent;
  let fixture: ComponentFixture<DiashowControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiashowControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiashowControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
