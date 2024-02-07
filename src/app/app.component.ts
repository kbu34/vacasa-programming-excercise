import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RepoListComponent } from './repo-list/repo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RepoListComponent],
  styleUrl: './app.component.scss',
  template: `
    <app-repo-list></app-repo-list>
    `
})
export class AppComponent {
  title = 'programming-excercise';
}
