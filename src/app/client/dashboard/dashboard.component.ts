import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { School, Class, User, Layer } from "../../models";
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DialogNewLayer } from "./dialog new layer/dialog-new-layer.conponent";
import { DialogEditLayer } from "./dialog-edit-layer/dialog-edit-layerconponent";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

  constructor(
    public userService: UserService, private authService: AuthService) {
    this.userService.users.subscribe(users => {
      if (users) {
        if (users[0].fname)
          this._students = users.sort((a, b) => {
            return a.fname.localeCompare(b.fname)
          });
        else
          this._students = users
      }
    });
  }
  private _students: User[];



  public get students() {
    return this._students.filter(res=>{
      return !this.authService.getUser().positivePrefer.includes(res._id) && !this.authService.getUser().negativePrefer.includes(res._id);
    })
  }

  public get positive() {
    return this._students.filter(res => {
      return this.authService.getUser().positivePrefer.includes(res._id);
    })
  }

  public get negative() {
    return this._students.filter(res => {
      return this.authService.getUser().negativePrefer.includes(res._id);
    })
  }

  addToPositive(id: string) {
    this.authService.addPositive(id);
  }

  addToNegative(id: string) {
    this.authService.addNegative(id);
    return false;
  }

  save() {
    this.authService.update().then(res => { })
  }

  clear() {
    let ans = confirm("האם למחוק את כל העדפות");
    if (ans) {
      this.authService.getUser().negativePrefer = [];
      this.authService.getUser().positivePrefer = [];
      this.save();
    }
  }

}


