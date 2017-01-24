import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./app/app.html"
})
export class AppComponent implements OnInit {
    activeHome: boolean = true;
    activeTask: boolean = false;

    constructor() {}

    ngOnInit() {
        console.log("Application component initialized ...");

        this.activeHome = true;
        this.activeTask = false;
    }

    getStyle(active: boolean): string {
        if (active) {
            return "active";
        }
        return "";
    }
}