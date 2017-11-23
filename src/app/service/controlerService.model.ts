import { HttpService } from "./http/http.service";



export class ControlerService {
    protected path: string;
    protected CREATE: string = "create";
    protected ALL: string = "all";
    protected UPDATE: string = "update";
    protected GETBYID: string = "getById";

    constructor(path, protected http: HttpService) {
        this.path = path + "/";
    }

    public getAll<T>(id?: string): Promise<any> {
        return this.http.post(this.path + this.ALL, { id: id });
    }


    public update<T>(item): Promise<T> {
        return this.http.post<T>(this.path + this.UPDATE, item);
    }

    public create<T>(item): Promise<T> {
        return this.http.post(this.path + this.CREATE, item);
    }

    public getById(id: string): Promise<any> {
        let temp = { _id: id };
        return this.http.post(this.path + this.GETBYID, temp);
    }


}