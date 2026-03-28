import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AgentConnectionService } from './core/services/agent-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(public agentConnection: AgentConnectionService) {}

  ngOnInit(): void {
    initFlowbite();
    this.agentConnection.checkConnection();
  }
}
