import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayerService, AuthService, UserService } from '../../service/index';
import { HeaderCard, Layer } from '../../models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogNewLayer } from '../dashboard/dialog new layer/dialog-new-layer.conponent';
import { DialogEditLayer } from '../dashboard/dialog-edit-layer/dialog-edit-layerconponent';
import { ComponentBase } from "../../componentBase.model";
import { NavService } from '../../service/nav/nav.service';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayersComponent extends ComponentBase implements OnInit {

  public headerCards: HeaderCard[];
  constructor(public layerService: LayerService,
    public dialog: MatDialog,
    private authService: AuthService,
    public userService: UserService,
    navService: NavService
  ) {
    super(navService)
  }

  public addLayer() {


    let dialogRef = this.dialog.open(DialogNewLayer, {
      width: '600px'

    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result && result.success) {
        this.layerService.addLayer(result.layer, this.authService.schoolId).then(res => {
          this.authService.addOperation("הוספת שכבת לימוד חדשה", "add")
        });
      }
    });
  }

  ngOnInit() {
    this.headerCards = [
      new HeaderCard("class", "מספר שכבות", this.layerService.num, "#796aee"),
      new HeaderCard("sort", "ממוצע תלמידים לשכבה", +(this.userService.num / this.layerService.num).toFixed(0), "#ffc36d"),
      new HeaderCard("show_chart", "ממוצע כיתות לשכבה", this.layerService.num, "#63c3ff")
    ]
  }

  editLayer(layer: Layer) {
    console.log(layer);
    let dialogRef = this.dialog.open(DialogEditLayer, {
      width: '600px',
      data: layer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        layer.classes = result.layer.classes;
        layer.name = result.layer.name;
        layer.maleClasses = result.layer.maleClasses;
        layer.femaleClasses = result.layer.femaleClasses;
        layer.maleAndFemale = result.layer.maleAndFemale;
        this.layerService.updateLayer(layer);
      }
    });

  }

  public search(str) {

  }



}
