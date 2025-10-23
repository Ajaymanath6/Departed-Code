import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIUiComponent } from './ai-ui.component';

describe('AIUiComponent', () => {
  let component: AIUiComponent;
  let fixture: ComponentFixture<AIUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
