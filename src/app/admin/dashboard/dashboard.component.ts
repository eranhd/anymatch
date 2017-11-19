import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { SchoolService, AuthService, LayerService } from "../../service";
import { School } from "../../models";
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  public form: FormGroup;
  school;
  constructor(public schoolService: SchoolService, 
    private authService: AuthService, 
    @Inject(FormBuilder) fb: FormBuilder,
    private layerService: LayerService) {
    // this.schoolService.getSchool(this.authService.getUser().schoolId);
    // console.log(this.school);

    this.form = fb.group({
      addLayer: fb.group({
        name: ["", Validators.required]
      }),
      addClass: fb.group({
        name: ["", Validators.required],
        layerName: ["", Validators.required]
      }),
      addUser: fb.group({
        name: ["", Validators.required],
        layerName: ["", Validators.required],
        ClassName: ["", Validators.required]
      })
    });
  }

  public update() {
    // this.schoolService.update();
  }

  public addLayer() {
    this.layerService.addLayer(this.form.controls.addLayer.value, this.schoolService.school._id).then(res=>{
      this.schoolService.addLayer(res["layer"]._id);
    })
  }

  public addClass() {

  }

  public addUser() {
    
  }



  ngOnInit() {
  }

}
