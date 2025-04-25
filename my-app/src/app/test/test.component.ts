import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, AfterViewInit {
  @ViewChild('caseCarousel') caseCarousel!: ElementRef<HTMLElement>;

  private isDragging: boolean = false;
  private startX: number = 0;
  private scrollLeft: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialization code if needed
  }

  ngAfterViewInit(): void {
    this.initCarouselDrag();
    this.setupCarouselControls();
    this.updateFadeIndicators();
  }

  private initCarouselDrag(): void {
    if (!this.caseCarousel?.nativeElement) return;

    const carousel: HTMLElement = this.caseCarousel.nativeElement;
    const carouselInner: HTMLElement | null = carousel.querySelector('.carousel-inner');

    if (!carouselInner) return;

    // Mouse events with typed event handlers
    carouselInner.addEventListener('mousedown', (e: MouseEvent) => this.startDragging(e));
    carouselInner.addEventListener('mousemove', (e: MouseEvent) => this.drag(e));
    carouselInner.addEventListener('mouseup', () => this.stopDragging());
    carouselInner.addEventListener('mouseleave', () => this.stopDragging());

    // Touch events for mobile with typed event handlers
    carouselInner.addEventListener('touchstart', (e: TouchEvent) => this.startTouchDragging(e));
    carouselInner.addEventListener('touchmove', (e: TouchEvent) => this.touchDrag(e));
    carouselInner.addEventListener('touchend', () => this.stopDragging());

    // Add scroll event to update fade indicators
    carouselInner.addEventListener('scroll', () => this.updateFadeIndicators());
  }

  private setupCarouselControls(): void {
    if (!this.caseCarousel?.nativeElement) return;

    const carousel: HTMLElement = this.caseCarousel.nativeElement;
    const prevButton: HTMLElement | null = carousel.querySelector('.carousel-control-prev');
    const nextButton: HTMLElement | null = carousel.querySelector('.carousel-control-next');
    const carouselInner: HTMLElement | null = carousel.querySelector('.carousel-inner');

    if (!carouselInner) return;

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        // Scroll left by 300px (width of one case item)
        this.scrollCarousel(carouselInner, -300);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        // Scroll right by 300px (width of one case item)
        this.scrollCarousel(carouselInner, 300);
      });
    }
  }

  private updateFadeIndicators(): void {
    if (!this.caseCarousel?.nativeElement) return;

    const carousel: HTMLElement = this.caseCarousel.nativeElement;
    const carouselInner: HTMLElement | null = carousel.querySelector('.carousel-inner');
    const leftFadeIndicator: HTMLElement | null = carousel.querySelector('.left-fade');
    const rightFadeIndicator: HTMLElement | null = carousel.querySelector('.right-fade');

    if (!carouselInner) return;

    if (leftFadeIndicator) {
      // Show left fade ONLY if scrolled to the right (some content is hidden to the left)
      if (carouselInner.scrollLeft > 10) {
        this.renderer.setStyle(leftFadeIndicator, 'opacity', '1');
      } else {
        this.renderer.setStyle(leftFadeIndicator, 'opacity', '0');
      }
    }

    if (rightFadeIndicator) {
      // Show right fade only if there's more content to scroll right
      const hasMoreContent: boolean =
        carouselInner.scrollLeft + carouselInner.clientWidth < carouselInner.scrollWidth - 5;

      this.renderer.setStyle(rightFadeIndicator, 'opacity', hasMoreContent ? '1' : '0');
    }
  }

  private scrollCarousel(element: HTMLElement, scrollAmount: number): void {
    element.scrollBy({
      left: scrollAmount,
      behavior: 'smooth' as ScrollBehavior
    });
  }

  private startDragging(e: MouseEvent): void {
    if (!this.caseCarousel?.nativeElement) return;

    const carouselInner: HTMLElement | null = this.caseCarousel.nativeElement.querySelector('.carousel-inner');
    if (!carouselInner) return;

    this.isDragging = true;
    this.startX = e.pageX - carouselInner.offsetLeft;
    this.scrollLeft = carouselInner.scrollLeft;

    // Change cursor style and add dragging class
    this.renderer.addClass(carouselInner, 'dragging');
    this.renderer.setStyle(document.body, 'user-select', 'none');
  }

  private startTouchDragging(e: TouchEvent): void {
    if (!this.caseCarousel?.nativeElement || !e.touches[0]) return;

    const carouselInner: HTMLElement | null = this.caseCarousel.nativeElement.querySelector('.carousel-inner');
    if (!carouselInner) return;

    this.isDragging = true;
    this.startX = e.touches[0].pageX - carouselInner.offsetLeft;
    this.scrollLeft = carouselInner.scrollLeft;

    // Add dragging class
    this.renderer.addClass(carouselInner, 'dragging');
    this.renderer.setStyle(document.body, 'user-select', 'none');
  }

  private drag(e: MouseEvent): void {
    if (!this.isDragging || !this.caseCarousel?.nativeElement) return;

    const carouselInner: HTMLElement | null = this.caseCarousel.nativeElement.querySelector('.carousel-inner');
    if (!carouselInner) return;

    e.preventDefault();
    const x: number = e.pageX - carouselInner.offsetLeft;
    const walk: number = (x - this.startX) * 1.5; // Scrolling speed multiplier
    carouselInner.scrollLeft = this.scrollLeft - walk;

    // Update fade indicators during drag
    this.updateFadeIndicators();
  }

  private touchDrag(e: TouchEvent): void {
    if (!this.isDragging || !this.caseCarousel?.nativeElement || !e.touches[0]) return;

    const carouselInner: HTMLElement | null = this.caseCarousel.nativeElement.querySelector('.carousel-inner');
    if (!carouselInner) return;

    const x: number = e.touches[0].pageX - carouselInner.offsetLeft;
    const walk: number = (x - this.startX) * 1.5; // Scrolling speed multiplier
    carouselInner.scrollLeft = this.scrollLeft - walk;

    // Update fade indicators during touch drag
    this.updateFadeIndicators();
  }

  private stopDragging(): void {
    if (!this.caseCarousel?.nativeElement) return;

    const carouselInner: HTMLElement | null = this.caseCarousel.nativeElement.querySelector('.carousel-inner');
    if (!carouselInner) return;

    this.isDragging = false;

    // Remove dragging class
    this.renderer.removeClass(carouselInner, 'dragging');
    this.renderer.removeStyle(document.body, 'user-select');
  }
}
