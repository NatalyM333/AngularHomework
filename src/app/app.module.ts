import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BoldDirective } from "./directive/bold.directive";
import { MyDirective } from "./directive/my.directive";
import { DataComponent } from "./data.component";
import { DataServise } from "./data.service";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, BoldDirective,MyDirective, DataComponent],
    bootstrap: [AppComponent],
    providers:[DataServise]
})

export class AppModule { }

