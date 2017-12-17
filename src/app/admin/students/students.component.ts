import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../service/index';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
