import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chatgpt-template',
  templateUrl: './chatgpt-template.component.html',
})
export class ChatgptTemplateComponent {
  selectedTemplate: string = 'basic';
  showMemberSelection: boolean = false;
  searchTerm: string = '';
  selectedMembers: any[] = [];
  availableUsers: any[] = [
    { id: 1, name: 'John Smith', email: 'john.smith@company.com', role: 'Developer', avatar: 'JS' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.johnson@company.com', role: 'Designer', avatar: 'SJ' },
    { id: 3, name: 'Mike Chen', email: 'mike.chen@company.com', role: 'Manager', avatar: 'MC' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@company.com', role: 'Analyst', avatar: 'ED' },
    { id: 5, name: 'David Wilson', email: 'david.wilson@company.com', role: 'Developer', avatar: 'DW' },
    { id: 6, name: 'Lisa Brown', email: 'lisa.brown@company.com', role: 'QA Engineer', avatar: 'LB' },
    { id: 7, name: 'James Miller', email: 'james.miller@company.com', role: 'DevOps', avatar: 'JM' },
    { id: 8, name: 'Anna Garcia', email: 'anna.garcia@company.com', role: 'Product Manager', avatar: 'AG' },
  ];
  customTemplate: any = {
    name: '',
    description: '',
    fields: [],
  };

  constructor(private cdr: ChangeDetectorRef) {}

  selectTemplate(templateType: string): void {
    this.selectedTemplate = templateType;
    this.cdr.detectChanges();
  }

  showMemberSelectionPage(): void {
    this.showMemberSelection = true;
    this.cdr.detectChanges();
  }

  goBackToForm(): void {
    this.showMemberSelection = false;
    this.cdr.detectChanges();
  }

  goBackToSelection(): void {
    this.selectedTemplate = '';
    this.cdr.detectChanges();
  }

  addCustomField(): void {
    const fieldNumber = this.customTemplate.fields.length + 1;
    this.customTemplate.fields.unshift({
      label: `Field ${fieldNumber}`,
      type: 'text',
      placeholder: 'Enter value...',
      required: false,
      options: '',
    });
    this.cdr.detectChanges();
  }

  removeCustomField(index: number): void {
    this.customTemplate.fields.splice(index, 1);
    this.cdr.detectChanges();
  }

  resetCustomTemplate(): void {
    this.customTemplate = { name: '', description: '', fields: [] };
    this.cdr.detectChanges();
  }

  getSelectOptions(optionsString: string): string[] {
    if (!optionsString) return [];
    return optionsString
      .split(',')
      .map((option) => option.trim())
      .filter((option) => option !== '');
  }

  addMember(user: any): void {
    if (!this.selectedMembers.find((member) => member.id === user.id)) {
      this.selectedMembers.push({ ...user, projectRole: 'Member' });
      this.cdr.detectChanges();
    }
  }

  removeMember(userId: number): void {
    this.selectedMembers = this.selectedMembers.filter((member) => member.id !== userId);
    this.cdr.detectChanges();
  }

  updateMemberRole(userId: number, newRole: string): void {
    const member = this.selectedMembers.find((m) => m.id === userId);
    if (member) {
      member.projectRole = newRole;
      this.cdr.detectChanges();
    }
  }

  get filteredUsers(): any[] {
    if (!this.searchTerm) return this.availableUsers;
    const term = this.searchTerm.toLowerCase();
    return this.availableUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term)
    );
  }

  isMemberSelected(userId: number): boolean {
    return this.selectedMembers.some((member) => member.id === userId);
  }

  getMemberButtonText(userId: number): string {
    return this.isMemberSelected(userId) ? 'Added' : 'Add';
  }

  onRoleChange(event: Event, memberId: number): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.updateMemberRole(memberId, target.value);
    }
  }

  createProject(): void {
    console.log('Creating project with members:', this.selectedMembers);
  }
}
