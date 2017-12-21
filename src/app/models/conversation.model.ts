import { Message, MessageView } from "./message.model";


export class Conversation {
    public messages: Message[];
}

export class ConversationView extends Conversation {
    public messagesView: MessageView[];
}