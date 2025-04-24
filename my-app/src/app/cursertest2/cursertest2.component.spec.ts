import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursertest2Component } from './cursertest2.component';

describe('Cursertest2Component', () => {
  let component: Cursertest2Component;
  let fixture: ComponentFixture<Cursertest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cursertest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cursertest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
