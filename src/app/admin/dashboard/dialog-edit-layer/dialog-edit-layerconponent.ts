import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Layer } from "../../../models/layer.model";
import { Router } from "@angular/router";

@Component({
    selector: 'dialog-edit-layer',
    templateUrl: './dialog-edit-layerconponent.html',
})
export class DialogEditLayer {

    public form: FormGroup;
    public layer: Layer;
    constructor(
        public dialogRef: MatDialogRef<DialogEditLayer>,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any, 
        @Inject(FormBuilder) fb: FormBuilder) {

        this.layer = data;
        this.form = fb.group({

            name: [this.layer.name, Validators.required],
            classes: [this.layer.classes, Validators.required]

        });

    }

    onNoClick(): void {
        this.dialogRef.close({ success: false })
    }

    public addLayer() {
        this.dialogRef.close({ success: true, layer: this.form.value })
    }

    openLayer(){

        this.router.navigate(["layout/admin/layer", this.layer._id]);
        this.dialogRef.close({ success: false })
    }

}