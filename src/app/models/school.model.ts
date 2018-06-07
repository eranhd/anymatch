import { Item } from "./Item.model";
import { IsNotEmpty, IsNumber } from "class-validator";
export class School extends Item {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty() @IsNumber()
    code: string;
    
    layersId: string[];
    
    usersId: string[];
    @IsNumber()
    numOfMatch: 0;
}

export class SchoolViewModel extends School {

}