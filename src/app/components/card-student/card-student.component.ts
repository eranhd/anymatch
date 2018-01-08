import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../models/user.model";
import { MessageService } from '../../service/index';
import { Router } from '@angular/router';
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
  @Output() message: EventEmitter<User> = new EventEmitter<User>()
  constructor(private msgService: MessageService, private router: Router ) { }

  ngOnInit() {
  }

  msgClick(){
    this.msgService.startConversationWith(this.user._id);
    console.log("/layout/" + this.msgService.rout + "/messages");
    this.router.navigate(["/layout/" + this.msgService.rout + "/messages"]);
  }

}
