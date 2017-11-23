import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, SchoolService, LayerService, ClassService } from "../service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private schoolService: SchoolService,
    private layerService: LayerService,
    private classService: ClassService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log("in auth guard");


    if (this.authService.isAuth()) {
      return new Promise(
        (resolve, rej) => {
          this.schoolService.initSchool(this.authService.getUser().schoolId)
            .then(res => {
              this.layerService.getAllLayers(this.authService.getUser().schoolId).then(_ => {
                this.classService.getAllClass(this.authService.getUser().schoolId).then(_ => {
                  resolve(true);
                })
              })
            });
        });
    }
    else {
      let user = JSON.parse(localStorage.getItem("auth"));
      if (user)
        this.authService.login(user).then(u => {
          if (this.authService.isAuth()) {
            return new Promise(
              (resolve, rej) => {
                this.schoolService.initSchool(this.authService.getUser().schoolId)
                  .then(res => {
                    this.layerService.getAllLayers(this.authService.getUser().schoolId).then(_ => {
                      this.classService.getAllClass(this.authService.getUser().schoolId).then(_ => {
                        this.router.navigate(["/admin"])
                        resolve(true);
                      })
                    })
                  });
              });
          }
          else {
            this.router.navigate(["/login"])
            return false;
          }
        });
      else {
        this.router.navigate(["/login"])
        return false;
      }
    }



  }
}
