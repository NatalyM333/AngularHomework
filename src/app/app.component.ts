import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { truncate } from "node:fs";
import { DataServise } from "./data.service";
import {LogService} from './log.service';
@Component({
    selector: 'my-app',
    template: `<data-component></data-component>`
})

export class AppComponent {}