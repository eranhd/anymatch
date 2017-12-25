import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../service/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  public password: string;
  public verifyPassword: string;
  private _errMessage: string;
  public user: User;
  public hobbies = [
    "משחקי מחשב", "ציור", "צילום", "מוזיקה", "ספרות", "ריצה",
    "כדורגל", "כדורסל", "אומנות לחימה", "טבע", "גינון", "סרטים"
  ]

  constructor(public authService: AuthService) {
    this.user = authService.getUser();
  }

  public get errMessage() {
    if (!this.password || !this.verifyPassword)
      return "חובה למלא סיסמה ואימות סיסמה";
    if (this.password != this.verifyPassword)
      return "הסיסמאות אינן תואמות";
    return "";
  }

  public svae(pass) {
    // console.log(this.authService.getUser())
    this.authService._user = this.user;
    this.authService.changePassword(pass, this.password)
  }

  public clear() {
    this.password = "";
    this.verifyPassword = "";
  }
  ngOnInit() {

  }


}
