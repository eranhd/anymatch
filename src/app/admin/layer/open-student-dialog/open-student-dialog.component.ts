import { Component, OnInit, ViewEncapsulation, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LayerService } from '../../../service';

@Component({
  selector: 'app-open-student-dialog',
  templateUrl: './open-student-dialog.component.html',
  styleUrls: ['./open-student-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OpenStudentDialogComponent implements OnInit {

  public _addUser
  private _students
  constructor(public dialogRef: MatDialogRef<OpenStudentDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private layerService: LayerService) { }

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
    return this._students
    // return this.data.students.map(u =>  u.fname + " " + u.lname );
  }

  get addUser() {
    if (typeof this._addUser !== "string" && this._addUser) {
      return this._addUser.fname + " " + this._addUser.lname
    }
    return this._addUser
  }
  set addUser(u) {
    if (typeof u === "string") {
      this._students = this.data.students.filter(user => user.fname.includes(u) || user.lname.includes(u))
      // this._addUser = u
      this._addUser = null
    }
    else
      this._addUser = u
  }

  public addtoPositive() {
    if (typeof this._addUser !== "string" && this._addUser) {
      let u = this._addUser

      this.data.user.positivePrefer.push(u._id);
      this.data.positivePrefer ? this.data.positivePrefer.push(u) : this.data.positivePrefer = [u];
      console.log(this.data.user);
      this._addUser = "";
    }
  }

  public addToNegative() {
    if (typeof this._addUser !== "string" && this._addUser) {
      let u = this._addUser
      this.data.user.negativePrefer.push(u._id);
      this.data.negativePrefer ? this.data.negativePrefer.push(u) : this.data.negativePrefer = [u];
      this._addUser = "";
    }
  }

  public async addForbidden() {
    if (typeof this._addUser !== "string" && this._addUser)
      await this.layerService.forbidden(this._addUser, this.data.user._id, this.data.layerId);
  }


  public get pos() {
    return this.data.positivePrefer ? this.data.positivePrefer : [];
  }

  public get neg() {
    return this.data.negativePrefer ? this.data.negativePrefer : [];
  }

}
