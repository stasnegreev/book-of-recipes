import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-field',
  templateUrl: './rating-field.component.html',
  styleUrls: ['./rating-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingFieldComponent),
    multi: true
  }]
})
export class RatingFieldComponent implements ControlValueAccessor {
  public rating;

  get value() {
    return this.rating;
  }

  @Input()
  set value(val) {
    this.rating = val;
    this.onChange(this.rating);
  }

  onChange(_: any) {}
  onTouched(_: any) {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setValue(rating: number) {
    this.rating = rating;
    this.onChange(rating);
  }
}
