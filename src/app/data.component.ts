import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";

import { DataServise } from "./data.service";

@Component({
    selector: 'data-component',
    template:
        `<div>
            <label>New product</label><br>
            <label>Name</label><br>
            <input [(ngModel)]="name"><br>
            <label>Price</label><br>
            <input [(ngModel)]="price"><br>
            <button (click)="addItem(name, price)">ADD</button>
         </div>
         <table>
            <tr *ngFor="let item of items"> 
                <td>{{item.Id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td> <button (click)="deleteItem(item.Id)">Delete</button></td>
            </tr>
         </table>
            `,
           // providers: [DataServise, LogService]
          
})

export class DataComponent {
    items: any[]=[];
  
    constructor(private dataServise: DataServise) {}

    ngOnInit(){
        this.items = this.dataServise.getData();
    }

    addItem(name: string,price: string){
       let id =this.items[this.items.length-1].Id+1;
       this.dataServise.addData({Id:id,name,price});
    }
    
    deleteItem(id: any){
        this.dataServise.deleteData(id);
        this.items = this.dataServise.getData();
     }
}
