import { Item } from "./Item.model";
export class School extends Item {
    name: String;
    code: String;
    layersId: String;
    usersId: String;
}

export class SchoolViewModel extends School {

}