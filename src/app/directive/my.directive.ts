import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[my]'
})

export class MyDirective{
    constructor(private  templateRef: TemplateRef<any>,
         private viewContainerRef: ViewContainerRef) {

    }

    @Input() set my(condition: boolean){
        if(condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }
}