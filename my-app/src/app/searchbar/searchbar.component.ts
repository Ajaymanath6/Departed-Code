// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-searchbar',
//   templateUrl: './searchbar.component.html',
//   styleUrls: ['./searchbar.component.scss']
// })
// export class SearchbarComponent {

// }
import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchBarComponent {
  //chips = ['John'];
  chips: any = [];
  inputValue = '';
  isEditingChip = false;

  // References
  @ViewChild('containerRef', { read: ElementRef })
  containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('inputRef', { read: ElementRef })
  inputRef!: ElementRef<HTMLInputElement>;
  @ViewChildren('chipRefs', { read: ElementRef })
  chipRefs!: QueryList<ElementRef>;

  // Convert the chipRefs ViewChildren to a typescript array
  get chipRefsArray(): ElementRef[] {
    return this.chipRefs.toArray();
  }

  /**
   * Pushes a new chip by inputValue into the chips array
   */
  insertChip() {
    if (this.inputValue.length === 0) return;
    if (this.inputValue.length > 0 && this.inputValue.length < 3) {
      this.clearSearchbarValue();
      console.log('Min 3 characters');
      return;
    }
    if (this.inputValue.length > 100) {
      this.clearSearchbarValue();
      console.log('Max input length can be 100!');
      return;
    }

    // this.chips.push(this.inputValue);
    this.clearSearchbarValue();
  }

  /**
   * insert filter chip start
   */
  insertFilterChip(type: string) {
    this.chips.push({ type, value: 'Biffco' });
    this.clearSearchbarValue();
  }
  /**insert filter chip end**/

  /**
   * Clear search bar value
   */
  clearSearchbarValue() {
    this.inputValue = '';
  }

  /**
   * Set the chip editing status to the status passed as an argument
   * @param {boolean} status
   */
  setChipEditingStatus(status: boolean) {
    this.isEditingChip = status;
  }

  /**
   * Set the focus on input element when we click on the search bar
   * If the user clicks on the chips, then do not do anything, as the focus needs to be on the chip.
   * @param {MouseEvent} event
   */
  setFocusOnInput(event: MouseEvent) {
    if ((event.target as HTMLElement).nodeName === 'SPAN') return;

    this.inputRef.nativeElement.focus();
  }

  /**
   * Select a chip (Focus mode) based on the index passed
   * @param {number} index
   */
  selectChipAtIndex(index: number) {
    if (this.chips.length === 0) return;
    if (this.inputValue.length > 0) return;

    this.chipRefsArray[index].nativeElement.firstChild.focus();
  }

  /**
   * Delete a chip
   * @param {number} index
   */
  deleteChip(index: number) {
    if (this.chips.length === 0) return;

    // If the index is 0 or higher and index is less than the length of chipRefsArray array - 1
    if (index >= 0 && index < this.chipRefsArray.length - 1) {
      this.chipRefsArray[index + 1].nativeElement.firstChild.focus();
    }
    // If the index is higher than 0 and index is equal to the length of chipRefsArray array - 1
    else if (index > 0 && index === this.chipRefsArray.length - 1) {
      this.chipRefsArray[index - 1].nativeElement.firstChild.focus();
    } else {
      this.inputRef.nativeElement.focus();
    }
    this.chips.splice(index, 1);
  }

  /**
   * When user uses the arrow keys (left and right), cycle through the chips and the search input
   * @param {KeyboardEvent} event
   */
  move(event: KeyboardEvent) {
    if (
      ((event.target as HTMLElement).nodeName === 'INPUT' &&
        this.inputValue.length > 0) ||
      this.isEditingChip
    )
      return;

    let dir!: number;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      if (event.key === 'ArrowLeft') dir = -1;
      else if (event.key === 'ArrowRight') dir = 1;
      const allElements = Array.prototype.slice.call(
        this.containerRef.nativeElement.children,
      );
      // Remove the last element, the button element as it is not required to be cycled.
      const chipAndInputElements = allElements.slice(0, allElements.length - 1);
      // If the node is app-chip, get the first child (The span tag)
      const elements = chipAndInputElements.map((element: HTMLElement) =>
        element.nodeName == 'APP-CHIP'
          ? (element.firstChild as HTMLElement)
          : element,
      );
      // Get current focussed element
      let currentFocussedIndex = elements.indexOf(
        document.activeElement as HTMLElement,
      );
      // Cycle through the elements
      currentFocussedIndex = (currentFocussedIndex + dir) % elements.length;
      // If the element focussed on doesn't exist, set the focus to the last one
      if (currentFocussedIndex === -1)
        currentFocussedIndex = elements.length - 1;
      elements[currentFocussedIndex]?.focus();
    }
  }
}
