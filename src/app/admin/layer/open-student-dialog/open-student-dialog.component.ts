import { Component, OnInit, ViewEncapsulation, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-open-student-dialog',
  templateUrl: './open-student-dialog.component.html',
  styleUrls: ['./open-student-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OpenStudentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpenStudentDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close({ success: false })
  }

  removeStudent(id: string, positive: boolean) {
    if (positive) {
      this.data.user.positivePrefer = this.data.user.positivePrefer.filter(i => i != id)
      this.data.positive = this.data.positive.filter(u => u._id != id)
    }

    else {
      this.data.user.negativePrefer = this.data.user.negativePrefer.filter(i => i != id)
      this.data.negative = this.data.negative.filter(u => u._id != id)
    }


  }
  public save() {
    this.dialogRef.close({ success: true, user: this.data.user })
  }

}
