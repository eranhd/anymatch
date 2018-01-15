import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, SchoolService, LayerService, ClassService } from "../service";
import { Router } from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {
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
          if (this.authService.getUser().permission != "student") {
            this.schoolService.initSchool(this.authService.schoolId)
              .then(res => {
                this.layerService.getAllLayers(this.authService.schoolId).then(_ => {
                  this.layerService.initSocket();
                  this.classService.getAllClass(this.authService.schoolId).then(_ => {
                    resolve(true);
                  })
                })
              });
          }
          else if (this.authService.permission === "student") {
            console.log(2);
            this.router.navigate(["/layout/client"]);
          }
        });
    }
    else {
      let user = JSON.parse(localStorage.getItem("auth"));
      if (user)
        this.authService.login(user, true).then(u => {
          if (this.authService.isAuth()) {
            return new Promise(
              (resolve, rej) => {
                if (this.authService.getUser().permission != "student") {
                  this.schoolService.initSchool(this.authService.getUser().schoolId)
                    .then(res => {
                      this.layerService.getAllLayers(this.authService.getUser().schoolId).then(_ => {
                        this.layerService.initSocket();
                        this.classService.getAllClass(this.authService.getUser().schoolId).then(_ => {
                          this.router.navigate(["/layout/admin"])
                          resolve(true);
                        })
                      })
                    });
                }
                else if (this.authService.getUser().permission === "student") {
                  // console.log(1);
                  this.router.navigate(["/layout/client"]);
                }
              });
          }
          else {
            // console.log(3);
            this.router.navigate(["/login"])
            return false;
          }
        });
      else {
        // console.log(4);
        this.router.navigate(["/login"])
        return false;
      }
    }



  }
}


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private schoolService: SchoolService,
    private layerService: LayerService,
    private classService: ClassService,
    private router: Router) {
      // console.log("in auth guard");
     }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log("in auth guards");



    if (this.authService.isAuth()) {
      return new Promise(
        (resolve, rej) => {

          this.schoolService.initSchool(this.authService.getUser().schoolId)
            .then(res => {
              this.layerService.getAllLayers(this.authService.getUser().schoolId).then(_ => {
                this.layerService.initSocket();
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
        this.authService.login(user, true).then(u => {
          if (this.authService.isAuth()) {
            return new Promise(
              (resolve, rej) => {
                this.schoolService.initSchool(this.authService.getUser().schoolId)
                  .then(res => {
                    this.layerService.getAllLayers(this.authService.getUser().schoolId).then(_ => {
                      this.layerService.initSocket();
                      this.classService.getAllClass(this.authService.getUser().schoolId).then(_ => {
                        this.router.navigate(["/layout/client"])
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
