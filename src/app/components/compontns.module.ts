import { NgModule } from "@angular/core";
import { CardStudentComponent } from './card-student/card-student.component';
import { CommonModule } from "@angular/common"
import { MaterialModule } from "../material/material.module";
@NgModule({
    declarations: [
        CardStudentComponent,
    ],
    exports: [
        CardStudentComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ComponentsModule { }