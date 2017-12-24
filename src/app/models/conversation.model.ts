import { Message, MessageView } from "./message.model";
import { Item } from "./Item.model";


export class Conversation extends Item {
    public messages: Message[];
    public participants: string[];
}

export class ConversationView extends Conversation {
    public messagesView: MessageView[];
}