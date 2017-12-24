import { Injectable } from '@angular/core';
import { Conversation, Message } from '../../models/index';
import { AuthService } from '../auth/auth.service';
import { UserService } from "../user/user.service";
import { Socket } from 'ng2-socket-io';
import { HttpService } from '../http/http.service';
import { ControlerService } from '../controlerService.model';
import { ReplaySubject } from "rxjs";

@Injectable()
export class MessageService extends ControlerService {

  public conversations: Conversation[] = [];
  public currentConversation: Conversation;
  public _currentConversation: ReplaySubject<Conversation> = new ReplaySubject();
  public numOfNewMessage: ReplaySubject<number> = new ReplaySubject();
  public recent: ReplaySubject<Conversation[]> = new ReplaySubject();

  constructor(http: HttpService,
    private authService: AuthService,
    private userService: UserService,
  ) {


    super("message", http);

    this.getAllMessages().then(c => {
      this.conversations = c;
      this.numOfNewMessage.next(this.notReadCount());
    });
    this.connectToSocket("massage/" + this.authService.id, "newMessage");

    this.socketReplay.subscribe(res => {
      if (res["event"] == "newMessage") {
        let c = this.getConversationById(res["data"].conversation._id);
        if (!c)
          this.conversations.push(res["data"].conversation);
        this.conversations = this.conversations.map((c, i) => {
          if (!c._id)
            return res["data"].conversation;
          else if (c._id === res["data"].conversation._id) {
            return res["data"].conversation;
          }

          return c;
        });
        console.log(this.conversations)
        if (this.currentConversation)
          if (this.currentConversation._id == res["data"].conversation._id) {
            this.currentConversation = res["data"].conversation;
            this._currentConversation.next(this.currentConversation);
          }
      }
      this.numOfNewMessage.next(this.notReadCount());
    });
  }

  private notReadCount() {
    let count = 0;
    this.conversations.forEach(c => {
      if (c)
        count += this.notCountMessages(c._id);
    });
    // console.log(count)
    this.recent.next(this.conversations.slice(0, this.conversations.length > 6 ? 6 : this.conversations.length))
    return count;
  }
  public notCountMessages(id: string) {
    let c = this.getConversationById(id);
    let count = 0;
    if (c)
      if (!c.messages[0].isRead[this.authService.id])
        return 1;

    return 0;
  }

  public getConversationById(id: string) {
    return this.conversations.find(res => res._id === id)
  }

  public async conversationOpen(id: string) {
    let c = this.getConversationById(id);
    c.messages[0].isRead[this.authService.id] = true;
    await this.create({ conversation: c });
    this.numOfNewMessage.next(this.notReadCount());
    return true;
  }

  public async sendMessage(conversation: Conversation, message: string) {
    let m = new Message();
    m.date = new Date();
    m.from = this.authService.id;
    m.text = message;
    m.isRead[this.authService.id] = true;
    conversation.messages.unshift(m);

    // this.socket.emit("message", conversation);
    conversation = <Conversation>await this.create({ conversation: conversation });
    await this.getAllMessages();
    return conversation;

  }

  public startConversationWith(id: string) {
    this.conversations = this.conversations.filter(c => c._id);
    let c = this.conversations.find(con => con.participants.includes(id));
    if (!c) {
      c = new Conversation();
      c.messages = [];
      c.participants = [this.authService.id, id]
      this.conversations.push(c);
    }
    this.currentConversation = c;
    return c;
  }


  public async getAllMessages() {
    this.conversations = await this.getAll(this.authService.id);
    this.currentConversation = this.conversations[0] ? this.conversations[0] : null;
    if (this.conversations) {
      this.numOfNewMessage.next(this.notReadCount());
      return this.conversations
        .sort((a, b) => {
          if (b.messages.length == 0)
            return -1;
          else if (a.messages.length == 0)
            return 1;
          else {
            let dateA = a.messages[0].date;
            let dateB = b.messages[0].date;
            return (dateB + "").localeCompare(dateA + "");
          }
        })
    }
    return [];
  }

}
