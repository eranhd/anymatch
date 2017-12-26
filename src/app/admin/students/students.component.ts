import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService, AuthService } from '../../service/index';
import { ComponentBase } from '../../componentBase.model';
import { NavService } from '../../service/nav/nav.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentsComponent extends ComponentBase implements OnInit, OnDestroy {

  private _students;
  private obs: any
  constructor(public userService: UserService,
    public authService: AuthService,
    navService: NavService) {
    super(navService)
    if (this.userService.num == 0)
      this.userService.getAllUsers(this.authService.schoolId).then(u => {
        this.obs = this.userService.users.subscribe(users => {
          this._students = users;
        });
      });
    else {
      this.obs = this.userService.users.subscribe(users => {
        this._students = users;
      });
    }
  }

  public get students() {
    return this.searchTerm != "" ? this._students.filter(s =>
      s.fname.includes(this.searchTerm) || s.lname.includes(this.searchTerm) || s.username.includes(this.searchTerm)
    ) : this._students
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.obs)
      this.obs.unsubscribe();
  }

}
