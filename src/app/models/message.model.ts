import { User } from "./user.model";
import { IsNotEmpty } from "class-validator";

export class Message {
    @IsNotEmpty()
    public from: string = "";
    @IsNotEmpty()
    public text: string = "";
    @IsNotEmpty()
    public date: Date = new Date();
    
    public isRead: any = {};
}

export class MessageView extends Message {
    public userFrom: User;
}