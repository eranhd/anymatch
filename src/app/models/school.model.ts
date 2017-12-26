import { Item } from "./Item.model";
export class School extends Item {
    name: string;
    code: string;
    layersId: string[];
    usersId: string[];
    numOfMatch: 0;
}

export class SchoolViewModel extends School {

}