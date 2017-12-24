import { Component, OnInit, ViewEncapsulation, Input, HostListener, OnChanges } from '@angular/core';
import { Conversation } from '../../models/index';
import { MessageService, AuthService } from '../../service/index';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() conversation: Conversation;
  public msg: string = "";




  constructor(public messageService: MessageService, public authService: AuthService) { }


  @HostListener('window:keyup', ['$event']) keypress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.send();
    }

  }


  public async send() {
    if (this.msg != "") {
      this.conversation = await this.messageService.sendMessage(this.conversation, this.msg);
      this.msg = "";
    }
    return false;
  }
  ngOnInit() {
  }

  ngOnChanges(data){
    console.log(data)
  }



}
