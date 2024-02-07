import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any[]> {
    const apiUrl = 'https://api.github.com/repositories';
    return this.http.get<any[]>(apiUrl);
  }
}
