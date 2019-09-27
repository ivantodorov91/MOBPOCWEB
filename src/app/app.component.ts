import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GroupyfyWeb';
  table: { label: string, value: string }[];

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
