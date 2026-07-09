import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Casedetail2Component } from './casedetail2.component';

describe('Casedetail2Component', () => {
  let component: Casedetail2Component;
  let fixture: ComponentFixture<Casedetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Casedetail2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Casedetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
