import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ULAComponent } from './ula.component';

describe('ULAComponent', () => {
  let component: ULAComponent;
  let fixture: ComponentFixture<ULAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ULAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ULAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
