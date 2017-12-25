import { Component, OnInit, ViewEncapsulation, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-layer-charge-dialog',
  templateUrl: './new-layer-charge-dialog.component.html',
  styleUrls: ['./new-layer-charge-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewLayerChargeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewLayerChargeDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close({ success: false })
  }
  
  public save() {
    this.dialogRef.close({ success: true, user: this.data.user })
  }

}
