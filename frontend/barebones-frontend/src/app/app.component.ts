import { SchemaService } from './schema.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'barebones-frontend';
  welcomeMessage: string;

  constructor(private schemaService: SchemaService) { }

  ngOnInit(): void {
    this.getWelcomeMessage();
  }

  getWelcomeMessage(): void {
    this.schemaService.getSchemaServerRoot().subscribe(message => this.welcomeMessage = message);
  }
}
