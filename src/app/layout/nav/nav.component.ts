import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavService } from '../../service/nav/nav.service';
import { AuthService } from '../../service/index';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  title: string = ""
  constructor(public navService: NavService, public auth: AuthService) {
    if(this.auth.permission != ""){
      this.auth.permission == "student" ? this.title = "תלמיד" : this.title = "אחראי"
    }
    // console.log(this.navService.items)
  }

  ngOnInit() {
  }

}
