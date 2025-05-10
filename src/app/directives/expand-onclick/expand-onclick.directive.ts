import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
	selector: "[expandOnClick]",
})
export class ExpandOnclickDirective {
	constructor(private el: ElementRef) {}

	@HostListener("click") expand() {
		this.el.nativeElement.classList.remove("line-clamp-3");
	}
}
