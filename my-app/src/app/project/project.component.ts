import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  isSidebarExpanded: boolean = true;
  // isfacetExpanded:boolean= false;
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
  //   toggleFacetbar() {
  //   this.isfacetExpanded = !this.isfacetExpanded;
  // }
}
