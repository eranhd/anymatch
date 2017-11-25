import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
    selector: 'dialog-new-layer',
    templateUrl: './dialog-new-layer.html',
})
export class DialogNewLayer {

    public form: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<DialogNewLayer>,
        @Inject(MAT_DIALOG_DATA) public data: any, @Inject(FormBuilder) fb: FormBuilder, ) {

        this.form = fb.group({

            name: ["", Validators.required],
            classes: [0, Validators.required]

        });
    }

    onNoClick(): void {
        this.dialogRef.close({ success: false })
    }

    public addLayer() {
        this.dialogRef.close({ success: true, layer: this.form.value})
    }

}