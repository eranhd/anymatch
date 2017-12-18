import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../models/user.model";
@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardStudentComponent implements OnInit {

  @Input() user: User;
  @Input() color: string;
  @Input() showActions: boolean = false;
  @Output() open: EventEmitter<User> = new EventEmitter<User>()
  constructor() { }

  ngOnInit() {
  }

}
