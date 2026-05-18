import { Component } from '@angular/core';

@Component({
  selector: 'app-document-order',
  templateUrl: './document-order.component.html',
  styleUrls: ['./document-order.component.scss'],
})
export class DocumentOrderComponent {
  /** Used by table mix div row expander (unchanged). */
  showDocumentOrderDetails = false;

  /** First full-table row expand (<!--full table str--> only). */
  fullTableDetailsExpanded = false;

  toggleDocumentOrderDetails(): void {
    this.showDocumentOrderDetails = !this.showDocumentOrderDetails;
  }

  toggleFullTableDetails(): void {
    this.fullTableDetailsExpanded = !this.fullTableDetailsExpanded;
  }
}
