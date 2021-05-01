import { Output, EventEmitter, Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    // template: 
    //     `
    //         <h1>Child Component property1 = {{nameChild}}</h1>
    //         <h1>Child Component property2 = {{numberParrent}}</h1>
    //         <ng-content></ng-content>
    //     `,
    // styles: [
    //     `h1 {color: red}`
    // ]
    // template:
    //     `
    //         <button (click)="change(true)">+</button>
    //         <button (click)="change(false)">-</button>
    //     `,
    template:
        `
            <input [ngModel]="userName" (ngModelChanged)="changed($event)">
        `,
})

export class ChildComponent {
    // name = "Hunter"
    // @Input() nameChild: string;

    // _numberParrent: number;

    // @Input()
    // set numberParrent(numberParrent:number){
    //     this._numberParrent = numberParrent + 10;
    // }
    // get numberParrent() {
    //     return this._numberParrent;
    // }

    ///////////////////////////////////////////////////
    // @Output() onChanged = new EventEmitter<boolean>();
    // change(incr: any) {
    //     this.onChanged.emit(incr);
    // }
    ///////////////////////////////////////////////////
    
    @Input() userName : string;
    @Output() userNameChanged = new EventEmitter<string>();
    changed(model: string) {
        this.userName = model;
        this.userNameChanged.emit(model);
    }



}