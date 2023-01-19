import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTableComponent } from './working-table.component';

describe('WorkingTableComponent', () => {
  let component: WorkingTableComponent;
  let fixture: ComponentFixture<WorkingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
