import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../service/index';
import { ComponentBase } from '../../componentBase.model';
import { NavService } from '../../service/nav/nav.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentsComponent extends ComponentBase implements OnInit {

  private _students;
  constructor(public userService: UserService,
    navService: NavService) {
    super(navService)
    this.userService.getAll().then(u => {
      this._students = u;
    })
  }

  public get students() {
    return this.searchTerm != "" ? this._students.filter(s =>
      s.fname.includes(this.searchTerm) || s.lname.includes(this.searchTerm) || s.username.includes(this.searchTerm)
    ) : this._students
  }

  ngOnInit() {
  }

}
