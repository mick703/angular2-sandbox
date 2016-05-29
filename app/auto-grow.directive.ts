import {Directive, ElementRef, Renderer} from 'angular2/core'


@Directive({
    selector: '[autoGrow]', //[]attribute type of directive
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }
    
    onFocus(){
        console.log('on focus');
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '400px');
    }
    
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');        
    }
}