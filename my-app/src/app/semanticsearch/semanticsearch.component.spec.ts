import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticsearchComponent } from './semanticsearch.component';

describe('SemanticsearchComponent', () => {
  let component: SemanticsearchComponent;
  let fixture: ComponentFixture<SemanticsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
