import { ItemWithIcon } from "./ItemWithIcon.model";
export class HeaderCard extends ItemWithIcon {
    constructor(icon: string, public title: string, public num: number, public color: string) {
        super(icon);
    }
}