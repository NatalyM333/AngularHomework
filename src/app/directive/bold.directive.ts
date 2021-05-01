import {Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({   
        selector: '[bold]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()',
        }
})

export class BoldDirective{

    @Input() selectedSize = "32px";
    @Input() defaultSize = "16px";

    constructor(private elementRef: ElementRef,private render: Renderer2){
        this.render.setStyle(this.elementRef.nativeElement, "cursor", "pointer")
    }

    onMouseEnter(){
        this.setFontWeight("bold", this.selectedSize);
    }
    onMouseLeave(){
        this.setFontWeight("normal", this.defaultSize);
    }
    setFontWeight(val: string,valSize: string){
        this.render.setStyle(this.elementRef.nativeElement, "font-weight", val);
        this.render.setStyle(this.elementRef.nativeElement, "font-size", valSize)
    }

    ///////////////////////////////////
    // private fontWeight = "normal";

    // @HostBinding("style.fontWeight") get getFontWeight() {
    //     return this.fontWeight;
    // }

  
    // @HostListener("mouseenter") onMouseEnter() {
    //     this.fontWeight = "bold";
    // }
    // @HostListener("mouseleave") onMouseLeave() {
    //     this.fontWeight = "normal";
    // }
    //////////////////////////////////////////////
    // @HostBinding("style.cursor") get getCursor() {
    //     return 'pointer';
    // }

    // constructor(private elementRef: ElementRef,private render: Renderer2){
    //     this.render.setStyle(this.elementRef.nativeElement, "cursor", "point")
    //    // this.elementRef.nativeElement.style.fontWeight = "bold"
    // }
    // @HostListener("mouseenter") onMouseEnter() {
    //     this.setFontWeight("bold");
    // }
    // @HostListener("mouseleave") onMouseLeave() {
    //     this.setFontWeight("normal");
    // }
    // setFontWeight(val: string){
    //     this.render.setStyle(this.elementRef.nativeElement, "font-weight", val)
    // }

}