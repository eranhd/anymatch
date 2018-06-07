import { Item } from "./Item.model";
import { IsNotEmpty, IsNumber } from "class-validator";

export class User extends Item {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    schoolId: string;
    @IsNotEmpty()
    layerId: string;
    @IsNotEmpty()
    fname: string;
    
    lname: string;
    @IsNotEmpty()
    permission: string;
    @IsNotEmpty()
    isLogin: boolean;
    
    positivePrefer: string[];
    
    negativePrefer: string[];
    
    group: number;
    
    gender: string;
    
    lastOperation: any[] = [];
}