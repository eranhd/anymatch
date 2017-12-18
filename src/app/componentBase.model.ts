import { NavService } from "./service/nav/nav.service"

export class ComponentBase {


    public searchTerm = ""
    constructor(public navService: NavService){
        this.navService.searchObser.subscribe(s=>{
            this.search(s);
        })
    }

    protected search(str: string){
        this.searchTerm = str;
    }
}