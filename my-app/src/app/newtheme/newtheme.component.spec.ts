import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthemeComponent } from './newtheme.component';

describe('NewthemeComponent', () => {
  let component: NewthemeComponent;
  let fixture: ComponentFixture<NewthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewthemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
