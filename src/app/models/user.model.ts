import { Item } from "./Item.model";

export class User extends Item {
    username: string;
    password: string;
    schoolId: string;
    layerId: string;
    fname: string;
    lname: string;
    permission: string;
    isLogin: boolean;
    positivePrefer: string[];
    negativePrefer: string[];
    group: number;
}