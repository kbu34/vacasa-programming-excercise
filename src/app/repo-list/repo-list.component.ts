import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
    imports: [CommonModule],
    selector: 'app-repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  repositories: any[] = [];
  repos: any = 1;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    const headers= new HttpHeaders().set('Accept', 'application/vnd.github.v3+json');

    return this.httpClient.get("https://api.github.com/search/repositories?q=org:microsoft&sort=stars&order=desc", {'headers': headers})
    .subscribe(
      response => {
        this.repos = response;
      },
      catchError(error => {
        console.error('Error fetching repositories', error);
        return throwError('Something went wrong.');
      })
    )
  }
}
