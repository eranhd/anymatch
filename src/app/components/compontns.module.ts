import { NgModule } from "@angular/core";
import { CardStudentComponent } from './card-student/card-student.component';
import { CommonModule } from "@angular/common"
import { MaterialModule } from "../material/material.module";
import { GraphComponent } from './graph/graph.component';
import { PagesHeaderComponent } from './pages-header/pages-header.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
    declarations: [
        CardStudentComponent,
        GraphComponent,
        PagesHeaderComponent,
        MessagesComponent,
        MessageComponent,
        ContactComponent
    ],
    exports: [
        CardStudentComponent,
        GraphComponent,
        PagesHeaderComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ComponentsModule { }