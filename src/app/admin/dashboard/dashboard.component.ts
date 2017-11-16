import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolService, AuthService } from "../../service";
import { School } from "../../models";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  school;
  constructor(public schoolService: SchoolService, private authService: AuthService) {
    this.schoolService.getSchool(this.authService.getUser().schoolId);
    // console.log(this.school);
  }

  public update(){
    this.schoolService.update();
  }



  ngOnInit() {
  }

}
