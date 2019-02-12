import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';

@Directive({
  selector: 'input [appAutoInputWidth]'
})
export class AutoInputWidthDirective {
  inputBox: HTMLInputElement;

  @Input()
  appAutoInputWidth;

  constructor(elementRef: ElementRef<HTMLInputElement>) {
    this.inputBox = elementRef.nativeElement;
  }

  @HostListener('focus')
  onFocus() {
    const witdth = this.inputBox.offsetWidth +
      Number(this.appAutoInputWidth);

    this.inputBox.style.width = witdth + 'px';
  }

  @HostListener('blur')
  onFocusLost() {
    const witdth = this.inputBox.offsetWidth -
      Number(this.appAutoInputWidth);

    this.inputBox.style.width = witdth + 'px';
  }

}
