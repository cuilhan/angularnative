import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class AppComponent {

    email="info@succrm.com";
    submit(){
        alert("sizin Emailiniz " + this.email);
    }
}