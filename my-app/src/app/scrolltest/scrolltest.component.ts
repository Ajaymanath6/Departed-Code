import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolltest',
  templateUrl: './scrolltest.component.html',
  styleUrls: ['./scrolltest.component.scss'],
})
export class ScrolltestComponent {
  // data attorney data carosel h-sroll and mouse drag start

  private isDragging = false; // Tracks drag state
  private startX = 0; // Initial mouse position on drag
  private scrollLeft = 0; // Initial scroll position

  // Handle mouse wheel scroll
  onWheelScroll(event: WheelEvent, container: HTMLElement) {
    event.preventDefault(); // Prevent vertical scrolling
    const scrollAmount = event.deltaY > 0 ? 50 : -50; // Adjust scroll speed
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  // Handle mouse down for dragging
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX; // Record initial mouse position
    this.scrollLeft = (event.target as HTMLElement).scrollLeft || 0; // Record initial scroll position
  }

  // Handle mouse up to stop dragging
  onMouseUp() {
    this.isDragging = false;
  }

  // Handle mouse move for dragging
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const container = event.target as HTMLElement;
    const distance = this.startX - event.pageX; // Calculate distance moved
    container.scrollLeft = this.scrollLeft + distance; // Update scroll position
  }
  // data attorney data carosel h-sroll and mouse drag end
}
