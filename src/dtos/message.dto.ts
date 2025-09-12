import { BaseModel } from "./common.dto";

export class MessageData extends BaseModel {
    type: number = 1;
    option: number = 0;
    to: string = "";
    data: any = {};
}