import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { School, Class, User, Layer, HeaderCard } from "../../models";
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {


  public headerCards: HeaderCard[];
  private _students: User[];
  private _layer: Layer;

  public feedback: any[] = [
    "האם שובצת עם תלמידים שרצית להשתבץ?",
    "האם היית משנה את השיבוץ?",
    "יש תלמידים אחרים שהיית מסיר מהכיתה שלך?",
    "האם תהליך בחירת התלמידים היה קל?"
  ];
  public grade: number[] = [1, 2, 3, 4, 5];
  public result: number[] = [3,3,3,3]

  constructor(public schoolService: SchoolService,
    public authService: AuthService,
    public layerService: LayerService,
    private classService: ClassService,
    public userService: UserService) {
    this.headerCards = [
      new HeaderCard("group", "מספר תלמידים בשכבה", this.userService.num, "#ff7676"),
      new HeaderCard("done_all", "מספר התלמידים שבחרו", this.layerService.num, "#796aee"),
      new HeaderCard("sync", "בחירה פתוחה", null, "#54e69d")
    ]

    this._layer = this.layerService.getLayerById(this.authService.getUser().layerId);

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

  public get timer() {
    let d = new Date();

    // console.log(d.toLocaleDateString())
    if (this._layer)
      if (this._layer.lockTime) {
        let d2 = new Date(this._layer.lockTime);
        console.log(d2.toLocaleDateString())
        return d2.getFullYear() <= d.getFullYear() && d2.getMonth() <= d.getMonth() && d2.getDate() <= d.getDate() ? null : d2;
      }
    return null
  }



}


