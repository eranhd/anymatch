import { Component, OnInit, ViewEncapsulation,OnDestroy } from '@angular/core';
import { MessageService, AuthService } from '../../service/index';
import { Conversation } from '../../models/index';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit, OnDestroy {

  public conversation: Conversation
  private sub;
  constructor(public messageService: MessageService, private authService: AuthService) {
    this.conversation = this.messageService.currentConversation;
    // this.sub = this.messageService._currentConversation.subscribe(c => {
    //   this.conversation = c;
    //   console.log(c)
    // })

  }

  public get con() {
    return this.messageService.conversations;
  }

  public getName(c: Conversation) {
    if(c)
      return c.participants.find(res => res != this.authService.id)
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    // this.sub.unsubscribe();
  }

}
