import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTempTestComponent } from './email-temp-test.component';

describe('EmailTempTestComponent', () => {
  let component: EmailTempTestComponent;
  let fixture: ComponentFixture<EmailTempTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTempTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailTempTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
