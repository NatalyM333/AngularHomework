import {Injectable, Optional} from '@angular/core';


@Injectable()

export class DataServise{
constructor() {}

    private data: any[] = [
        {Id: 1, name: "product 1", price: 100},
        {Id: 2, name: "product 2", price: 200},
        {Id: 3, name: "product 3", price: 300},
        {Id: 4, name: "product 4", price: 400},
        {Id: 5, name: "product 5", price: 500},
        {Id: 6, name: "product 6", price: 600},
        {Id: 7, name: "product 7", price: 700},
        {Id: 8, name: "product 8", price: 800},
        {Id: 9, name: "product 9", price: 900},
        {Id: 10, name: "product 10", price: 1000}
        ];
        
    getData(): any[]{
       
        return this.data;
    }
    addData(val: any){
        console.log(val);
        this.data.push(val);
    }
    deleteData(val: any){
        console.log(val);
        this.data = this.data.filter(function(item) {
            return item.Id !== val;
        })
        console.log(this.data);
        
    }
}