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

  constructor(public navService: NavService, public auth: AuthService) {
    // console.log(this.navService.items)
  }

  ngOnInit() {
  }

}
