import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  private _pageName = "";
  private _items: NavItem[] = [];
  constructor() {

  }

  public navForAdmin() {
    this._items = [
      new NavItem("ראשי", "admin/dashboard", "home", true),
      new NavItem("שכבות", "admin/layers", "class", false),
      new NavItem("תלמידים", "admin/students", "group", false),
      new NavItem("הגדרות", "admin/setting", "settings", false),
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

}

export class NavItem {
  constructor(public text: string, public url: string, public icon: string, public isSelect) { }
}
