export interface MessageStatus {
    sentTime: Date;
    recievedTime: Date;
    read: boolean;
}

export interface Message {
    sender: string;
    reciever: string;
    message: string;
    messageStatus: MessageStatus;
}