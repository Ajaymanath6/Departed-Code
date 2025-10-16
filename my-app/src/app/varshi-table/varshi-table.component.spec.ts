import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarshiTableComponent } from './varshi-table.component';

describe('VarshiTableComponent', () => {
  let component: VarshiTableComponent;
  let fixture: ComponentFixture<VarshiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarshiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarshiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
