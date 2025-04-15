import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-md-checkbox',
  templateUrl: './md-checkbox.component.html',
  styleUrls: ['./md-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MdCheckboxComponent),
      multi: true
    }
  ]
})
export class MdCheckboxComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() change = new EventEmitter<boolean>();

  private rippleTimeout: any;
  isRippling: boolean = false;

  // ControlValueAccessor implementation
  onChange: any = () => {};
  onTouch: any = () => {};

  onMouseDown(event: MouseEvent) {
    if (this.disabled) return;

    if (this.rippleTimeout) {
      clearTimeout(this.rippleTimeout);
    }
    this.isRippling = true;
    this.toggleCheckbox();
  }

  onMouseUp(event: MouseEvent) {
    if (this.disabled) return;

    if (this.rippleTimeout) {
      clearTimeout(this.rippleTimeout);
    }
    this.rippleTimeout = setTimeout(() => {
      this.isRippling = false;
    }, 300);
  }

  private toggleCheckbox() {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouch();
    this.change.emit(this.checked);
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
