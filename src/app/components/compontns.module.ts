import { NgModule } from "@angular/core";
import { CardStudentComponent } from './card-student/card-student.component';
import { CommonModule } from "@angular/common"
import { MaterialModule } from "../material/material.module";
import { GraphComponent } from './graph/graph.component';
@NgModule({
    declarations: [
        CardStudentComponent,
        GraphComponent,
    ],
    exports: [
        CardStudentComponent,
        GraphComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ComponentsModule { }