// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chip',
//   templateUrl: './chip.component.html',
//   styleUrls: ['./chip.component.scss']
// })
// export class ChipComponent {

// }
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Dismiss, DismissOptions } from 'flowbite';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements AfterViewInit {
  // Global settings
  // Inputs
  @Input() editable = false;
  @Input() closeable = false;
  @Input() chip!: any;

  // Outputs from the component
  @Output() chipOutSelect = new EventEmitter<boolean>();
  @Output() chipOutEdit = new EventEmitter<boolean>();
  @Output() chipOutDelete = new EventEmitter<boolean>();

  // Component variables
  isEditing = false;
  @ViewChild('buttonRef') buttonRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('chipRef') chipRef!: ElementRef<HTMLSpanElement>;

  constructor(
    protected element: ElementRef,
    private renderer: Renderer2,
  ) {}

  /**
   * Replace any invalid characters as specified by the HTML ID naming convention, to make it valid
   * This method is used while setting the ID of the chip component
   */
  get value() {
    return this.element.nativeElement.innerText.replace(/[^\w]/g, '-');
  }

  ngAfterViewInit() {
    // A chip component cannot be editable but closeable
    if (this.editable && !this.closeable) {
      throw new Error('Chip cannot be editable and not closeable');
    }

    // Add event listeners and attributes when a chip is editable
    if (this.editable) {
      this.renderer.listen(this.chipRef.nativeElement, 'click', () =>
        this.chipOutSelect.emit(true),
      );
      this.renderer.listen(this.chipRef.nativeElement, 'dblclick', (event) =>
        this.startEditing(event),
      );
      this.renderer.listen(this.chipRef.nativeElement, 'keydown', (event) =>
        this.onKeydown(event),
      );
      this.renderer.listen(this.chipRef.nativeElement, 'blur', (event) =>
        this.stopEditing(event),
      );
      this.renderer.setAttribute(
        this.chipRef.nativeElement,
        'contentEditable',
        String(this.isEditing),
      );
    }
  }

  /**
   * Start editing the chip
   * @param {MouseEvent | KeyboardEvent} event
   */
  startEditing(event: MouseEvent | KeyboardEvent) {
    if (this.isEditing) return;

    this.isEditing = true;
    this.chipOutEdit.emit(true);
    this.renderer.setAttribute(event.target, 'contentEditable', 'true');
    event.target instanceof HTMLElement && this.placeCaretAtEnd(event.target);

    // this.buttonRef.nativeElement.style.display = 'none';
  }

  /**
   * Stop editing the chip
   * @param {FocusEvent | KeyboardEvent} event
   */
  stopEditing(event: FocusEvent | KeyboardEvent) {
    if (!this.isEditing) return;
    if (this.chipRef.nativeElement.innerText.length > 100) {
      this.removeChip();
      console.log('Max chip length can be 100!');
      return;
    }

    this.isEditing = false;
    this.chipOutEdit.emit(false);
    this.renderer.setAttribute(event.target, 'contentEditable', 'false');

    if ((event?.target as HTMLElement)?.innerText.length === 0) {
      this.buttonRef.nativeElement.click();
    } else {
      // this.buttonRef.nativeElement.style.display = 'block';
    }
  }

  /**
   * Delete the chip
   */
  removeChip() {
    const DISMISS_DURATION = 200; // in milliseconds
    const options: DismissOptions = {
      duration: DISMISS_DURATION,
      onHide: () => {
        setTimeout(() => {
          this.chipOutDelete.emit(true);
        }, DISMISS_DURATION);
      },
    };
    const dismiss = new Dismiss(
      this.chipRef.nativeElement,
      this.buttonRef.nativeElement,
      options,
    );
    dismiss.hide();
  }

  /**
   * When user presses down on any key
   * @param {KeyboardEvent} event
   */
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.isEditing) {
        this.stopEditing(event);
      } else {
        this.startEditing(event);
      }
    }

    if (event.key === 'Backspace') {
      if (
        !this.isEditing &&
        this.chipRef.nativeElement.innerText.length !== 0
      ) {
        this.removeChip();
      }
    }
  }

  /**
   * Utility function to place the caret at the end of the text when chip is in edit mode
   * @param {HTMLElement} element
   */
  placeCaretAtEnd(element: HTMLElement) {
    element?.focus();
    const range = document.createRange();
    element && range.selectNodeContents(element);
    range.collapse(false);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  getIconByType(type: string) {
    switch (type) {
      case 'attorney':
        return { icon: 'business_center', title: 'Attorney' };
      case 'caseName':
        return { icon: 'source', title: 'Case Name' };
      case 'judge':
        return { icon: 'gavel', title: 'Judge' };
      case 'lawFirm':
        return { icon: 'domain', title: 'Law-Firm' };
      case 'court':
        return { icon: 'list_alt', title: 'Court' };
      case 'caseType':
        return { icon: 'list_alt', title: 'Case Type' };
      default:
        return { icon: 'business_center', title: 'Attorney' };
    }
  }
}
