import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    // template: "<label> Entername </label>",
    // styles: [
    //     `h1 { color: red; }
    //     host{ background-color: red }`
    // ],

    // templateUrl: './app.component.html',
    // template: `<input type="text" [value]="name">`,
    // template: `<p [textContent]="name"></p>
    //             <p>{{name}}</p>
    // `,
    // template: `
    //     <table border="1">
    //         <tr>
    //             <td [attr.colspan]="colspan">1-2</td>
    //         </tr>
    //          <tr>
    //             <td>1</td>
    //             <td>2</td>
    //         </tr>    
    //     </table>
    // `,
    // template: 
    //     `
    //         <p> Count click {{count}}</p>
    //         <button (click)="incr()">Click</button>    
    //     `,
    // template: 
    //     `
    //         <p> Count click {{count}}</p>
    //         <button on-click="incr($event)">Click</button>    
    //     `,
    // template: 
    //     `
    //         <p> Count click {{name}}</p>
    //         <input type="text" [(ngModel)]="name"><br>
    //         <input type="text" [(ngModel)]="name"><br>
    //     `,
    // styleUrls: ['./app.component.css']
    // template: 
    // `
    //     <div [class.isRedbox]="isRed"></div>
    //     <div [class.isRedbox]="!isRed"></div>
    //     <div [class.isRedbox]="!isRed"></div>
    //     <input type="checkbox" [(ngModel)]="isRed"> 
    // `,
    // template: 
    // `
    //     <div [class.isRedbox]="isRed"></div>
    //     <div [class.isRedbox]="!isRed"></div>
    //     <div></div>
    //     <div [class]="red"></div>

    //     <input type="checkbox" [(ngModel)]="isRed"> 
    // `,
    // template:
    //     `
    //         <div [style.backgroundColor]="isRed ? 'red' : 'blue'"></div>
    //         <div></div>
    //         <input type="checkbox" [(ngModel)]="isRed"> 
    //     `,
    // styles: [
    //     `
    //         div {width: 100px; height: 50px; border: 2px solid black; margin: 5px}
    //         .isRedbox {background-color: red}        
    //     `
    // ]
    // template:
    //     `
    //         <child-comp [nameChild]="name" [numberParrent]="numberParrent"><h1>Main Component {{name}}</h1></child-comp>
    //     `,
    // styles: [
    //     `h1 {color: blue}`
    // ]
    // template:
    //     `
    //         <h1>Count click: {{clicks}}</h1>
    //         <child-comp (onChanged)="onChanged($event)"></child-comp>
    //     `,
    // styles: [
    //     `h1 {color: blue}`
    // ]
    template:
        `
            <h1>Name: {{name}}</h1>
            <child-comp [(userName)]="name"></child-comp>
        `,
    styles: [
        `h1 {color: blue}`
    ]

})

export class AppComponent {
    // name = 'Ghost';
    // my_data = new Date();
    // colspan = 2;
    // count:number = 0;
    // incr($event: any):void {
    //     this.count++;
    //     console.log($event);
    // }
    // isRed = false;
    // red = "isRedbox";
    ////////////////////////////////////////////////
    // name: string = 'Ghost';
    // numberParrent: number = 10;
    ////////////////////////////////////////////////
    // clicks: number = 0;
    // onChanged(incr: any){
    //     (incr == true) ? this.clicks++ : this.clicks--;
    // }
    ////////////////////////////////////////////////
    name: string = "Ghost";
    onChanged(name: any){
        this.name = name;

    }
}