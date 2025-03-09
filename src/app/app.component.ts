import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

/**
 * The root application component.
 */
@Component({
    imports: [NavBarComponent, RouterOutlet],
    selector: "app-root",
    styleUrl: "./app.component.scss",
    templateUrl: "./app.component.html",
})
export class AppComponent {}
