import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BoldDirective } from "./directive/bold.directive";
import { MyDirective } from "./directive/my.directive";
import { DataComponent } from "./data.component";
import { DataServise } from "./data.service";
import { AdminComponent } from "./admin.component";
import { HomeComponent } from "./home.component";
import {Routes, RouterModule} from '@angular/router';
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: '**', redirectTo:'/'}
]

@NgModule({
    imports: [BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
    declarations: [AppComponent, BoldDirective,MyDirective, DataComponent,  HomeComponent, AdminComponent],
    bootstrap: [AppComponent],
    providers:[DataServise]
})

export class AppModule { }

