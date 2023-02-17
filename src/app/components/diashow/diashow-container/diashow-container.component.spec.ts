import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiashowContainerComponent } from './diashow-container.component';

describe('DiashowContainerComponent', () => {
  let component: DiashowContainerComponent;
  let fixture: ComponentFixture<DiashowContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiashowContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiashowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
