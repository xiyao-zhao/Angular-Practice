import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
} from "@angular/core";

@Directive({
    selector: "[appDropdown]",
})
export class DropdownDirective {
    @HostBinding("class.open") isOpen = false;

    @HostListener("click") toggleOpen() {
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

    
    // ~~~~~~~~~Dropdown can also be closed by a click anywhere outside~~~~~~~~~
    //
    // @HostBinding("class.open") isOpen = false;
    // @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    //     this.isOpen = this.elRef.nativeElement.contains(event.target)
    //         ? !this.isOpen
    //         : false;
    // }
    // constructor(private elRef: ElementRef) {}
}
