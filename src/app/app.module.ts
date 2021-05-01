import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BoldDirective } from "./directive/bold.directive";
import { MyDirective } from "./directive/my.directive";
import { DataComponent } from "./data.component";
import { DataServise } from "./data.service";
import { RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { HomeComponent } from "./home.component";


@NgModule({
    imports: [BrowserModule, FormsModule,
        // RouterModule.forRoot([
        //     {path: 'admin', component: AdminComponent},
        //     {path: 'home', component: HomeComponent},
        //     {path: '', redirectTo: 'home', pathMatch: 'full'},
        //   ])
    ],
    declarations: [AppComponent, BoldDirective,MyDirective, DataComponent],
    bootstrap: [AppComponent],
    providers:[DataServise]
})

export class AppModule { }

