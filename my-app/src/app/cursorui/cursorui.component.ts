import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursorui',
  templateUrl: './cursorui.component.html',
  styleUrls: ['./cursorui.component.scss']
})
export class CursoruiComponent {
  dropdownOpen = false;
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  // Checkbox states
  selectAllChecked: boolean = false;
  documentCheckboxes: { [key: string]: boolean } = {
    'doc-1': false,
    'doc-2': false,
    'doc-3': false,
    'doc-4': false
  };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isClickedInside =
      this.dropdownButton?.nativeElement.contains(target) ||
      this.dropdownMenu?.nativeElement.contains(target);

    if (!isClickedInside) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  createRipple(event: MouseEvent) {
    const button = this.dropdownButton.nativeElement;
    const ripple = button.querySelector('.ripple');

    // Remove any existing ripple
    ripple.classList.remove('animate-ripple');

    // Get click coordinates relative to button
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Set ripple position and start animation
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('animate-ripple');
  }

  onSelectAllChange(checked: boolean) {
    this.selectAllChecked = checked;
    Object.keys(this.documentCheckboxes).forEach(key => {
      this.documentCheckboxes[key] = checked;
    });
  }

  onDocumentCheckboxChange(docId: string, checked: boolean) {
    this.documentCheckboxes[docId] = checked;

    // Update selectAll state based on all checkboxes
    this.selectAllChecked = Object.values(this.documentCheckboxes).every(value => value);
  }
}
