import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ItemWithIcon } from '../../models/ItemWithIcon.model';


@Injectable()
export class NavService {

  private _pageName: string = "";
  private _items: NavItem[] = [];
  private searchObservable: Observable<string>;
  private searchObsrver;


  constructor() {
    this.searchObservable = new Observable(o => {
      this.searchObsrver = o;
    })

  }

  public navForAdmin() {
    this._items = [
      new NavItem("ראשי", "admin/dashboard", "home", true),
      new NavItem("שכבות", "admin/layers", "class", false),
      new NavItem("תלמידים", "admin/students", "group", false),
      new NavItem("הגדרות", "admin/setting", "settings", false),
      new NavItem("דואר", "admin/messages", "message", false),
      new NavItem("עזרה", "admin/help", "help", false),
    ]
    this.select(this._items[0])
  }

  public navForClient() {
    this._items = [
      new NavItem("ראשי", "client/dashboard", "home", true),
      new NavItem("השכבה שלי", "client/myLayer", "school", false),
      new NavItem("הכיתה שלי", "client/myClass", "class", false),
      new NavItem("הגדרות", "client/setting", "settings", false),
      new NavItem("דואר", "client/messages", "message", false),
      new NavItem("עזרה", "", "help", false),
    ]
    this.select(this._items[0])
  }

  public get pageName() {
    return this._pageName;
  }

  public select(item) {
    this._items.forEach(i => i.isSelect = false);
    item.isSelect = true;
    this._pageName = item.text;
  }

  public get items() {
    return this._items ? this._items : [];
  }


  public search(term: string) {
    this.searchObsrver.next(term);
  }

  public get searchObser() {
    return this.searchObservable;
  }


}

export class NavItem extends ItemWithIcon {
  constructor(public text: string, public url: string, icon: string, public isSelect) {
    super(icon);
  }
}
