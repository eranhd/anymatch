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
  public groups = []

  constructor(public userService: UserService, public layerService: LayerService, private authService: AuthService) {
    this.groups = layerService.getLayerById(this.authService.getUser().layerId).groups;
    this.userService.users.subscribe(users => {
      this._students = users;
    });
  }

  public get students() {
    return this._students ? this._students : []
  }

  public getStudentsByGroup(i) {
    return this.students.filter(user => {
      return this.groups[i].includes(user._id)
    });
  }

  public async swap(id){
    await this.layerService.swapRequest(id);
  }


  ngOnInit() {
  }

}
