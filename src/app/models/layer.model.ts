import { Item } from "./Item.model";

export class Layer extends Item {
    name: string;
    classesId: string[];
    classes: number = 0;
}