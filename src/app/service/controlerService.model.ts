import { HttpService } from "./http/http.service";
import * as io from 'socket.io-client';
import { ReplaySubject } from "rxjs";

export class ControlerService {
    protected path: string;
    protected CREATE: string = "create";
    protected ALL: string = "all";
    protected UPDATE: string = "update";
    protected GETBYID: string = "getById";
    protected PUSHTOARRAY: string = "pushToArray";
    protected socket;
    protected socketReplay: ReplaySubject<any>;
    protected observer: any;

    constructor(path, protected http: HttpService) {
        this.path = path + "/";

        this.socketReplay = new ReplaySubject<any>();
    }

    public connectToSocket(socket, event) {
        let s = io.connect(this.http.path + socket);
        console.log(s)
        s
            .on("connect", () => {
                console.log("connect to " + socket);
            });
        s
            .on((event), data => {
                console.log("new message")
                this.socketReplay.next({ data: data, event: event });
            });
        s
            .on("disconnect", ()=>{
                console.log("disconnect");
            })

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

    public pushToArray<T>(item, id, arrayName){
        let temp = {
            _id: id,
            item: item,
            arrayName: arrayName
        }
        return this.http.post(this.path + this.PUSHTOARRAY, temp);
    }




}