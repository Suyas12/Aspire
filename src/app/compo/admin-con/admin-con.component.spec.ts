import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConComponent } from './admin-con.component';

describe('AdminConComponent', () => {
  let component: AdminConComponent;
  let fixture: ComponentFixture<AdminConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
