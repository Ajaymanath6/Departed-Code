import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentOrderComponent } from './document-order.component';

describe('DocumentOrderComponent', () => {
  let component: DocumentOrderComponent;
  let fixture: ComponentFixture<DocumentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
