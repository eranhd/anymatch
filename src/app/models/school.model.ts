import { Item } from "./Item.model";
export class School extends Item {
    name: string;
    code: string;
    layersId: string[];
    usersId: string[];
}

export class SchoolViewModel extends School {

}