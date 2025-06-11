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

  // Template selection properties
  selectedTemplate: string = 'basic';

  // Member selection properties
  showMemberSelection: boolean = false;
  availableUsers: any[] = [
    { id: 1, name: 'John Smith', email: 'john.smith@company.com', role: 'Developer', avatar: 'JS' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.johnson@company.com', role: 'Designer', avatar: 'SJ' },
    { id: 3, name: 'Mike Chen', email: 'mike.chen@company.com', role: 'Manager', avatar: 'MC' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@company.com', role: 'Analyst', avatar: 'ED' },
    { id: 5, name: 'David Wilson', email: 'david.wilson@company.com', role: 'Developer', avatar: 'DW' },
    { id: 6, name: 'Lisa Brown', email: 'lisa.brown@company.com', role: 'QA Engineer', avatar: 'LB' },
    { id: 7, name: 'James Miller', email: 'james.miller@company.com', role: 'DevOps', avatar: 'JM' },
    { id: 8, name: 'Anna Garcia', email: 'anna.garcia@company.com', role: 'Product Manager', avatar: 'AG' }
  ];
  selectedMembers: any[] = [];
  searchTerm: string = '';

  // Custom template properties
  customTemplate: any = {
    name: '',
    description: '',
    fields: []
  };

  // Custom template methods
  addCustomField() {
    const fieldNumber = this.customTemplate.fields.length + 1;
    const newField = {
      label: `Field ${fieldNumber}`,
      type: 'text',
      placeholder: 'Enter value...',
      required: false,
      options: ''
    };
    this.customTemplate.fields.unshift(newField);
    console.log('Added new field:', newField);
    console.log('Total fields:', this.customTemplate.fields.length);
    console.log('All fields:', this.customTemplate.fields);
    this.cdr.detectChanges();
  }

  removeCustomField(index: number) {
    this.customTemplate.fields.splice(index, 1);
    this.cdr.detectChanges();
  }

  resetCustomTemplate() {
    this.customTemplate = {
      name: '',
      description: '',
      fields: []
    };
    this.cdr.detectChanges();
  }

  isCustomTemplateValid(): boolean {
    return this.customTemplate.name.trim() !== '' && this.customTemplate.fields.length > 0;
  }

  getSelectOptions(optionsString: string): string[] {
    if (!optionsString) return [];
    return optionsString.split(',').map(option => option.trim()).filter(option => option !== '');
  }

  // Template selection methods
  selectTemplate(templateType: string) {
    this.selectedTemplate = templateType;
    this.cdr.detectChanges();
  }

  goBackToSelection() {
    this.selectedTemplate = '';
    this.cdr.detectChanges();
  }

  // Member selection methods
  showMemberSelectionPage() {
    this.showMemberSelection = true;
    this.cdr.detectChanges();
  }

  goBackToForm() {
    this.showMemberSelection = false;
    this.cdr.detectChanges();
  }

  addMember(user: any) {
    if (!this.selectedMembers.find(member => member.id === user.id)) {
      this.selectedMembers.push({ ...user, projectRole: 'Member' });
      this.cdr.detectChanges();
    }
  }

  removeMember(userId: number) {
    this.selectedMembers = this.selectedMembers.filter(member => member.id !== userId);
    this.cdr.detectChanges();
  }

  updateMemberRole(userId: number, newRole: string) {
    const member = this.selectedMembers.find(m => m.id === userId);
    if (member) {
      member.projectRole = newRole;
      this.cdr.detectChanges();
    }
  }

  get filteredUsers() {
    if (!this.searchTerm) return this.availableUsers;
    return this.availableUsers.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Helper methods for template display
  isMemberSelected(userId: number): boolean {
    return this.selectedMembers.some(member => member.id === userId);
  }

  getMemberButtonText(userId: number): string {
    return this.isMemberSelected(userId) ? 'Added' : 'Add';
  }

  onRoleChange(event: Event, memberId: number) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.updateMemberRole(memberId, target.value);
    }
  }

  createProject() {
    // Handle project creation logic here
    console.log('Creating project with members:', this.selectedMembers);
    // Reset form or navigate to success page
  }
}
