import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

/**
 * Navigation link.
 */
interface NavLink {
    /** Display label. */
    label: string;
    /** Routing path. */
    path: string;
}

/**
 * Navigation bar component.
 */
@Component({
    imports: [RouterLink],
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.component.html",
})
export class NavBarComponent {
    /** Nav links. */
    public navLinks: NavLink[] = [
        {
            label: "Kabelky",
            path: "/kabelky",
        },
        {
            label: "Svetríky",
            path: "/svetriky",
        },
        {
            label: "Kontakt",
            path: "/kontakt",
        },
    ];
}
