import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, NgZone, ElementRef, ViewChild, AfterViewInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  animation,
  useAnimation,
  AnimationEvent
} from '@angular/animations';

// Define standalone animations for reuse
const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{duration}} {{delay}} {{easing}}', style({ opacity: 1 }))
], {
  params: {
    duration: '200ms',
    delay: '0ms',
    easing: 'ease-out'
  }
});

const fadeOut = animation([
  style({ opacity: '*' }),
  animate('{{duration}} {{delay}} {{easing}}', style({ opacity: 0 }))
], {
  params: {
    duration: '200ms',
    delay: '0ms',
    easing: 'ease-in'
  }
});

const scaleIn = animation([
  style({ opacity: 0, transform: 'scale(0.8)' }),
  animate('{{duration}} {{easing}}', style({ opacity: 1, transform: 'scale(1)' }))
], {
  params: {
    duration: '300ms',
    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
  }
});

const scaleOut = animation([
  style({ opacity: 1, transform: 'scale(1)' }),
  animate('{{duration}} {{easing}}', style({ opacity: 0, transform: 'scale(0.8)' }))
], {
  params: {
    duration: '200ms',
    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
  }
});

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    // Simple fade animation for content sections
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('250ms 50ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-8px)' }))
      ])
    ]),

    // Simplified modal animation
    trigger('modalAnimation', [
      transition(':enter', useAnimation(scaleIn)),
      transition(':leave', useAnimation(scaleOut))
    ]),

    // Simplified backdrop animation
    trigger('backdropAnimation', [
      transition(':enter', useAnimation(fadeIn)),
      transition(':leave', useAnimation(fadeOut))
    ])
  ]
})
export class ChatgptComponent implements OnInit, AfterViewInit {
  selectedContentType: string = 'less';
  modalVisible: boolean = false;
  // Track active content visibility for animation
  visibleContent: 'less' | 'more' | null = 'less';
  animationInProgress: boolean = false;

  // ViewChild to access the content container
  @ViewChild('contentContainer') contentContainer!: ElementRef;

  // Use HostBinding to add a class when modal is visible - helps with overflow
  @HostBinding('class.modal-active') get isModalActive() { return this.modalVisible; }

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    console.log('ChatGPT component initialized');
  }

  ngAfterViewInit() {
    // Initial setup
    this.cdr.detectChanges();
  }

  // Toggle modal visibility - debounced to prevent multiple clicks
  private isToggling = false;

  toggleModal(state: boolean) {
    // Prevent multiple clicks from causing animation issues
    if (this.isToggling) return;

    this.isToggling = true;

    this.ngZone.run(() => {
      this.modalVisible = state;

      // Reset animation state when opening
      if (state) {
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
        this.visibleContent = this.selectedContentType as 'less' | 'more';
        this.animationInProgress = false;
      } else {
        // Will restore body scrolling after animation completes
      }

      this.cdr.detectChanges();

      // Reset the toggle lock after a short delay
      setTimeout(() => {
        this.isToggling = false;
      }, 500); // Wait for animation to complete
    });
  }

  // Handle animation end events
  onAnimationDone(event: AnimationEvent) {
    // If modal closed, restore body scrolling
    if (event.toState === 'void' && !this.modalVisible) {
      document.body.style.overflow = '';
    }
  }

  // Method to handle content type changes with improved animation sequence
  onContentTypeChange(newType: string) {
    if (this.selectedContentType === newType || this.animationInProgress) return;

    this.ngZone.run(() => {
      this.animationInProgress = true;

      // First change the selection, but keep the visible content the same
      this.selectedContentType = newType;

      // Start animation sequence
      setTimeout(() => {
        // Hide current content
        this.visibleContent = null;
        this.cdr.detectChanges();

        // After a short delay, show the new content
        setTimeout(() => {
          this.visibleContent = newType as 'less' | 'more';
          this.animationInProgress = false;
          this.cdr.detectChanges();
        }, 250); // Wait for exit animation to complete
      }, 0);

      this.cdr.detectChanges();
    });
  }

  // Check if content should be visible
  isContentVisible(type: string): boolean {
    return this.visibleContent === type;
  }
}
