import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService, LayerService, AuthService } from '../../service/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyClassComponent implements OnInit {

  private _students: User[]
  private groups = []

  constructor(public userService: UserService, public layerService: LayerService, private authService: AuthService) {
    this.groups = layerService.getLayerById(this.authService.getUser().layerId).groups
    // console.log(this.groups)
    this.groups = this.groups.map(g => {
      if (g.includes(this.authService.id))
        return g
    })
    this.userService.users.subscribe(users => {
      this._students = users.filter(user => {
        return this.groups[0].includes(user._id)
      })
    })
  }

  public get students() {
    return this._students ? this._students : []
  }


  ngOnInit() {
  }

}
