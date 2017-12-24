import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { Conversation } from '../../models/index';
import { UserService } from '../../service/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  @Input() name: string;
  @Input() time: string;
  @Input() lastMessage: string;
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    let n = this.userService.getUserById(this.name);
    // console.log(n)
    if (n)
      this.name = n.fname + " " + n.lname;
  }

}
