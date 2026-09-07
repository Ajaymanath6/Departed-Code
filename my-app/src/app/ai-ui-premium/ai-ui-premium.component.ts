import { Component } from '@angular/core';

interface CaseItem {
  id: string;
  type: 'added' | 'removed' | 'changed';
  date: string;
  title: string;
  description: string;
  caseName: string;
  category: 'case' | 'attorney' | 'party' | 'document' | 'court';
  oldValue?: string;
  newValue?: string;
  highlightText?: string;
}

@Component({
  selector: 'app-ai-ui-premium',
  templateUrl: './ai-ui-premium.component.html',
  styleUrls: ['./ai-ui-premium.component.scss']
})
export class AIUiPremiumComponent {

  // Tab state
  activeTab: string = 'docket-history';

  // Filter state
  activeFilter: string = 'all';
  activeFilters: string[] = ['added', 'removed', 'changed'];

  // Sample data
  allItems: CaseItem[] = [
    {
      id: 'added-item-1',
      type: 'added',
      date: '2025-10-16',
      title: 'New Case Filed',
      description: 'Civil action filed for breach of credit card agreement',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'case',
      highlightText: 'Case No. 2025-CV-001234 filed in Superior Court'
    },
    {
      id: 'added-item-2',
      type: 'added',
      date: '2025-10-15',
      title: 'Attorney Representation',
      description: 'Plaintiff counsel has entered appearance in the case',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'attorney',
      highlightText: 'Sarah M. Johnson, Esq. (Bar #12345) representing plaintiff'
    },
    {
      id: 'added-item-3',
      type: 'added',
      date: '2025-10-14',
      title: 'Service of Process',
      description: 'Summons and complaint served on defendant',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'party',
      highlightText: 'Personal service completed at defendant\'s residence'
    },
    {
      id: 'removed-item-1',
      type: 'removed',
      date: '2025-10-13',
      title: 'Motion Withdrawn',
      description: 'Plaintiff\'s motion for summary judgment has been withdrawn',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'document',
      highlightText: 'Motion for Summary Judgment withdrawn by plaintiff counsel'
    },
    {
      id: 'changed-item-1',
      type: 'changed',
      date: '2025-09-23',
      title: 'Case Caption Corrected',
      description: 'Court clerk corrected the official case caption',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'case',
      oldValue: 'Capital One, N.A., a National Banking Association v. Ellis, John D.',
      newValue: 'Capital One N.A. v. Ellis, John David',
      highlightText: 'Case caption standardized per court rules'
    },
    {
      id: 'changed-item-2',
      type: 'changed',
      date: '2025-09-20',
      title: 'Attorney Contact Updated',
      description: 'Plaintiff attorney updated contact information with the court',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'attorney',
      oldValue: 'Johnson & Associates LLP, 123 Legal Plaza, Suite 400, Chicago, IL 60601',
      newValue: 'Johnson Law Group LLC, 789 Commerce Tower, Suite 1200, Chicago, IL 60602',
      highlightText: 'Law firm relocation - new address on file'
    },
    {
      id: 'changed-item-3',
      type: 'changed',
      date: '2025-09-18',
      title: 'Defendant Address Updated',
      description: 'Defendant filed change of address with the court',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'party',
      oldValue: 'John David Ellis, 1425 Oak Street, Apt 3B, Springfield, IL 62704',
      newValue: 'John David Ellis, 892 Maple Avenue, Unit 12, Springfield, IL 62701',
      highlightText: 'Defendant relocated - service address updated'
    },
    {
      id: 'changed-item-4',
      type: 'changed',
      date: '2025-09-15',
      title: 'Filing Date Amended',
      description: 'Court corrected the official filing date in case records',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'court',
      oldValue: 'Original Filing: September 15, 2024 at 4:47 PM',
      newValue: 'Corrected Filing: September 16, 2024 at 9:15 AM',
      highlightText: 'Filing timestamp corrected due to system error'
    },
    {
      id: 'changed-item-5',
      type: 'changed',
      date: '2025-09-10',
      title: 'Representation Status Changed',
      description: 'Defendant representation status has been updated',
      caseName: 'Capital One N.A. v. Ellis, John David',
      category: 'attorney',
      oldValue: 'Defendant: Represented by Public Defender Office',
      newValue: 'Defendant: Pro Se (Self-Represented)',
      highlightText: 'Defendant elected to proceed without counsel'
    }
  ];

  // Filtered items
  filteredItems: CaseItem[] = [];

  constructor() {
    this.filteredItems = this.allItems;
  }

  // Tab functions
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    console.log('Active tab set to:', tab);
  }

  // Filter toggle functions
  toggleFilter(filterType: string): void {
    const index = this.activeFilters.indexOf(filterType);
    if (index > -1) {
      this.activeFilters.splice(index, 1);
    } else {
      this.activeFilters.push(filterType);
    }
    console.log('Active filters:', this.activeFilters);
  }

  // Check if item should be shown based on active filters
  shouldShowItem(itemType: string): boolean {
    return this.activeFilters.length === 0 || this.activeFilters.includes(itemType);
  }

  // Action button functions
  onRefresh(): void {
    console.log('Refresh button clicked');
    // Add refresh logic here
  }

  onSetTracker(): void {
    console.log('Set Tracker button clicked');
    // Add set tracker logic here
  }

  // Status filter functions
  onFilterAdded(): void {
    console.log('Added filter clicked');
    this.activeFilter = 'added';
    this.applyFilter();
  }

  onFilterRemoved(): void {
    console.log('Removed filter clicked');
    this.activeFilter = 'removed';
    this.applyFilter();
  }

  onFilterChanged(): void {
    console.log('Changed filter clicked');
    this.activeFilter = 'changed';
    this.applyFilter();
  }

  onFilterAll(): void {
    console.log('All items filter clicked');
    this.activeFilter = 'all';
    this.applyFilter();
  }

  // Apply filter to data
  private applyFilter(): void {
    if (this.activeFilter === 'all') {
      this.filteredItems = this.allItems;
    } else {
      this.filteredItems = this.allItems.filter(item => item.type === this.activeFilter);
    }
    console.log(`Filtered items (${this.activeFilter}):`, this.filteredItems);
  }

  // Card action functions
  onCardMenuClick(itemId: string, itemType: string): void {
    console.log(`Card menu clicked for ${itemType} item:`, itemId);
    // Add card menu logic here
  }

  onViewDetails(itemId: string): void {
    console.log('View details clicked for item:', itemId);
    // Add view details logic here
  }

  // Pagination functions
  onPreviousPage(): void {
    console.log('Previous page clicked');
    // Add previous page logic here
  }

  onNextPage(): void {
    console.log('Next page clicked');
    // Add next page logic here
  }

  onPageClick(pageNumber: number): void {
    console.log('Page clicked:', pageNumber);
    // Add page navigation logic here
  }

  // Utility functions
  isActiveFilter(filter: string): boolean {
    return this.activeFilter === filter;
  }

  getFilterButtonClass(filter: string): string {
    const baseClass = 'flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200';

    if (this.isActiveFilter(filter)) {
      switch (filter) {
        case 'added':
          return `${baseClass} bg-gradient-to-r from-emerald-500 to-green-600 text-white`;
        case 'removed':
          return `${baseClass} bg-gradient-to-r from-red-500 to-rose-600 text-white`;
        case 'changed':
          return `${baseClass} bg-gradient-to-r from-amber-500 to-orange-600 text-white`;
        case 'all':
          return `${baseClass} bg-gradient-to-r from-slate-600 to-gray-700 text-white`;
        default:
          return `${baseClass} bg-gray-200 text-gray-700`;
      }
    } else {
      return `${baseClass} bg-gray-200 text-gray-700 hover:bg-gray-300`;
    }
  }

  // Get count for each filter type
  getAddedCount(): number {
    return this.allItems.filter(item => item.type === 'added').length;
  }

  getRemovedCount(): number {
    return this.allItems.filter(item => item.type === 'removed').length;
  }

  getChangedCount(): number {
    return this.allItems.filter(item => item.type === 'changed').length;
  }

  getAllCount(): number {
    return this.allItems.length;
  }

  // Get status badge class
  getStatusBadgeClass(type: string): string {
    switch (type) {
      case 'added':
        return 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800';
      case 'removed':
        return 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800';
      case 'changed':
        return 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800';
      default:
        return 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800';
    }
  }

  // Get status icon class
  getStatusIconClass(type: string): string {
    switch (type) {
      case 'added':
        return 'w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center';
      case 'removed':
        return 'w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center';
      case 'changed':
        return 'w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center';
      default:
        return 'w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center';
    }
  }

  // Get status indicator dot class
  getStatusDotClass(type: string): string {
    switch (type) {
      case 'added':
        return 'w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse';
      case 'removed':
        return 'w-1.5 h-1.5 bg-red-500 rounded-full mr-2';
      case 'changed':
        return 'w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 animate-bounce';
      default:
        return 'w-1.5 h-1.5 bg-gray-500 rounded-full mr-2';
    }
  }

  // Get category badge class
  getCategoryBadgeClass(category: string): string {
    switch (category) {
      case 'case':
        return 'inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800';
      case 'attorney':
        return 'inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800';
      case 'party':
        return 'inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800';
      case 'document':
        return 'inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-teal-100 text-teal-800';
      case 'court':
        return 'inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-100 text-orange-800';
      default:
        return 'inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800';
    }
  }

  // Get category icon
  getCategoryIcon(category: string): string {
    switch (category) {
      case 'case':
        return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
      case 'attorney':
        return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
      case 'party':
        return 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z';
      case 'document':
        return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
      case 'court':
        return 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4';
      default:
        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }
}
