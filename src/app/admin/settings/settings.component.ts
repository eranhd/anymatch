import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../service/index';

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
  constructor(public authService: AuthService) { }

  public get errMessage() {
    if (!this.password || !this.verifyPassword)
      return "חובה למלא סיסמה ואימות סיסמה";
    if (this.password != this.verifyPassword)
      return "הסיסמאות אינן תואמות";
    return "";
  }

  public svae(pass) {
    // console.log(this.authService.getUser())
    this.authService.changePassword(pass, this.password)
  }

  public clear() {
    this.password = "";
    this.verifyPassword = "";
  }
  ngOnInit() {

  }
  

}
