import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen; 
    }
    // ~~~~~~~~~~~Second way~~~~~~~~~~~
    // private isOpen = false;

    // constructor(private element: ElementRef) {
    // }

    // @HostListener('click')
    // private toggleOpen() {
    //     this.isOpen = !this.isOpen;
    //     if (this.isOpen) {
    //         this.element.nativeElement.classList.add('open');
    //     } else {
    //         this.element.nativeElement.classList.remove('open');
    //     }
    // }
}