import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private readonly element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const oldString = this.element.nativeElement.innerText;

    this.element.nativeElement.innerText = oldString.charAt(0).toUpperCase() + oldString.slice(1);
  }

}
