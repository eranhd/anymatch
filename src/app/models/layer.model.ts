import { Item } from "./Item.model";

export class Layer extends Item {
    name: string;
    classesId: string[];
    classes: number = 0;
    groups: string[][];
    lockTime: Date;
    forbidden: any[];
    maleAndFemale: boolean;
    maleClasses: number;
    femaleClasses: number;
}