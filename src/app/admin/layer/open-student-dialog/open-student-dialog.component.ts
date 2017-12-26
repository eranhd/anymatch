import { Component, OnInit, ViewEncapsulation, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-open-student-dialog',
  templateUrl: './open-student-dialog.component.html',
  styleUrls: ['./open-student-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OpenStudentDialogComponent implements OnInit {

  public _addUser
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

  public get students() {
    return this.data.students
    // return this.data.students.map(u =>  u.fname + " " + u.lname );
  }

  get addUser() {
    return this._addUser
  }
  set addUser(u) {
    console.log(u)
    this._addUser = u
  }

  public addtoPositive() {

    let u = this.students.find(u => u.username == this._addUser);
    // console.log(u)
    this.data.user.positivePrefer.push(u._id);
    this.data.positivePrefer ? this.data.positivePrefer.push(u) : this.data.positivePrefer = [u];
    console.log(this.data.user);
    this._addUser = "";
  }

  public addToNegative() {
    let u = this.students.find(u => u.username = this._addUser);
    this.data.user.negativePrefer.push(u._id);
    this.data.negativePrefer ? this.data.negativePrefer.push(u) : this.data.negativePrefer = [u];
    this._addUser = "";
  }


  public get pos() {
    return this.data.positivePrefer ? this.data.positivePrefer : [];
  }

  public get neg() {
    return this.data.negativePrefer ? this.data.negativePrefer : [];
  }

}
