import { Component } from "@angular/core";
import { UserService, AuthService, MessageService } from "../service/index";
import { NavService } from "../service/nav/nav.service";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"]
})

export class LayoutComponent {
    constructor(public authService: AuthService, 
        public navService: NavService,
        public msgService: MessageService) {
        if (this.authService.permission != "") {
            this.authService.permission != "student" ? this.navService.navForAdmin() : this.navService.navForClient()
        }

    }

}