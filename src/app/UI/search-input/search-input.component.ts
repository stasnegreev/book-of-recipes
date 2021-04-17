import {Component, ElementRef, forwardRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchInputComponent),
    multi: true
  }]
})
export class SearchInputComponent implements ControlValueAccessor {

  // tslint:disable-next-line:variable-name
  public _value: string;

  get value() {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  public isActive = false;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.onActiveOff();
    }
  }

  constructor(private el: ElementRef) {}

  private onChange(_: any) {}

  public writeValue(value: any) {
    this.value = value;
  }

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched() {}

  public onActiveOn() {
    this.isActive = true;
  }

  public onActiveOff() {
    this.isActive = false;
    this.value = '';
    this.onChange(this._value);
  }

  public onChangeInput() {
    this.onChange(this._value);
  }
}
