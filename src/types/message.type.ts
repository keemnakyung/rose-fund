export class MessageDataProps {
    userName: string = "";
    userPhone: string = "";
    content: string = "";
    contentTitle: string = "";
}

export interface MessagePostProps {
    type: number;
    option: number;
    to: string;
    data: MessageDataProps;
}