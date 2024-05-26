import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';  

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private queue: Movie[] = [];
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/movies`);
  }

  getQueue(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/queue`);
  }

  addToQueue(movie: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/queue`, movie);
  }

  searchMovies(query: string): Observable<Movie[]> {
    let params = new HttpParams().set('q', query);
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/search`, { params });
  }

  removeFromQueue(movie: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/queue`, { body: { title: movie.title } });
  }
}
