import { User } from "./user.model";

export class Message {
    public from: string = "";
    public to: string = "";
    public title: string = "";
    public text: string = "";
    public date: Date = new Date();
    public isRead: boolean = false;
}

export class MessageView extends Message {
    public userFrom: User;
    public userTo: User
}