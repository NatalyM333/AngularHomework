import { Component } from "@angular/core";
@Component({
    selector: 'my-app',
    template: `
    <nav>
    <a class="button" routerLink="/home">Home |</a>
    <a class="button" routerLink="/admin"> Admin</a>
  </nav>
    <data-component></data-component>
    <router-outlet></router-outlet>`
})

export class AppComponent {

}