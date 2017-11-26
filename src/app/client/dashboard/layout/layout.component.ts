import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../../service";



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  public password: string;
  public verifyPassword: string;
  private _errMessage: string;
  constructor(public authService: AuthService) {
    // console.log(this.activatedRoute.snapshot.params["id"])

  }


  public get errMessage() {
    if(!this.password || !this.verifyPassword)
      return "חובה למלא סיסמה ואימות סיסמה";
    if (this.password != this.verifyPassword)
      return "הסיסמאות אינן תואמות";
    return "";
  }

  public svae(pass){
    console.log(this.authService.getUser())
    this.authService.changePassword(pass ,this.password)
  }

  public clear(){
    this.password = "";
    this.verifyPassword = "";
  }
  ngOnInit() {

  }

}
