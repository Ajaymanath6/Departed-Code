import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoruiComponent } from './cursorui.component';

describe('CursoruiComponent', () => {
  let component: CursoruiComponent;
  let fixture: ComponentFixture<CursoruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoruiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
