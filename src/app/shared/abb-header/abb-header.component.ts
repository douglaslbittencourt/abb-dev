import { Component } from '@angular/core';

@Component({
    selector: 'app-abb-header',
    templateUrl: './abb-header.component.html',
    styleUrls: ['./abb-header.component.css']
})
export class AbbHeaderComponent {
    isCollapsed = false;

    toggleNavbar() {
        this.isCollapsed = !this.isCollapsed;
    }
}
