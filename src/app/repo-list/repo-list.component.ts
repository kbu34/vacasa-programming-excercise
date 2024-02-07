import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent implements OnInit {
  repositories: any[] = [];
  repos: any = 1;

  constructor(private githubService: GithubService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRepositories();
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

  getRepositories() {
    this.githubService.getRepositories().subscribe(
      (data: any[]) => {
        this.repositories = data;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }
}
