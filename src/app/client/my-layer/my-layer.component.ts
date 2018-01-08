import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { School, Class, User, Layer } from "../../models";
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-my-layer',
  templateUrl: './my-layer.component.html',
  styleUrls: ['./my-layer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyLayerComponent implements OnInit {


  private _students: User[];
  private _layer: Layer;


  constructor(
    public userService: UserService, private authService: AuthService, public layerService: LayerService) {
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

    this._layer = this.layerService.getLayerById(this.authService.getUser().layerId);
  }

  ngOnInit() {

  }

  public get students() {
    return this._students.filter(res => {
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

  get lock() {
    let d = new Date();
    if (this._layer)
      if (this._layer.lockTime) {
        let d2 = new Date(this._layer.lockTime);
        return d2.getFullYear() <= d.getFullYear() && d2.getMonth() <= d.getMonth() && d2.getDate() <= d.getDate()
      }
  }

}
