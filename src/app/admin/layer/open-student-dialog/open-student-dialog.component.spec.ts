import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStudentDialogComponent } from './open-student-dialog.component';

describe('OpenStudentDialogComponent', () => {
  let component: OpenStudentDialogComponent;
  let fixture: ComponentFixture<OpenStudentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenStudentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
