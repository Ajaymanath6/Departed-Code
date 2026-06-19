import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasedetailComponent } from './casedetail.component';

describe('CasedetailComponent', () => {
  let component: CasedetailComponent;
  let fixture: ComponentFixture<CasedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
