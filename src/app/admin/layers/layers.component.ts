import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayerService, AuthService } from '../../service/index';
import { HeaderCard, Layer } from '../../models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogNewLayer } from '../dashboard/dialog new layer/dialog-new-layer.conponent';
import { DialogEditLayer } from '../dashboard/dialog-edit-layer/dialog-edit-layerconponent';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayersComponent implements OnInit {

  public headerCards: HeaderCard[];
  constructor(public layerService: LayerService,
    public dialog: MatDialog,
    private authService: AuthService,
  ) { }

  public addLayer() {


    let dialogRef = this.dialog.open(DialogNewLayer, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.success)
        this.layerService.addLayer(result.layer, this.authService.getUser().schoolId).then(res => {
        });
    });
  }

  ngOnInit() {
    this.headerCards = [
      new HeaderCard("class", "מספר שכבות", this.layerService.num, "#796aee"),
      new HeaderCard("sort", "ממוצע תלמידים לשכבה", this.layerService.num, "#ffc36d"),
      new HeaderCard("show_chart", "ממוצע כיתות לשכבה", this.layerService.num, "#63c3ff")
    ]
  }

  editLayer(layer: Layer) {
    console.log(layer);
    let dialogRef = this.dialog.open(DialogEditLayer, {
      width: '350px',
      data: layer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success){
        layer.classes = result.layer.classes
        layer.name = result.layer.name
        this.layerService.updateLayer(layer);
      }
    });

  }

}
