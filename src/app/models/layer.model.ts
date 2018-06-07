import { Item } from "./Item.model";
import { IsNotEmpty, IsNumber } from "class-validator";

export class Layer extends Item {
    @IsNotEmpty()
    name: string;
    
    classesId: string[];
    @IsNotEmpty()
    @IsNumber()
    classes: number = 0;
    
    groups: string[][];
    
    lockTime: Date;
    
    forbidden: any[];
    
    maleAndFemale: boolean;
    
    maleClasses: number;
    
    femaleClasses: number;
}