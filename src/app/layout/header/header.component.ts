import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { MessageService, AuthService } from '../../service/index';
import { Conversation } from '../../models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


  searchValue: string;
  @Input() newMessage: number = 0;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor(public msgService: MessageService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  public getName(c: Conversation) {
    if (c)
      return c.participants.find(res => res != this.authService.id)
  }

  public open(c) {
    this.msgService.currentConversation = this.msgService.getConversationById(c._id);
  }

}
