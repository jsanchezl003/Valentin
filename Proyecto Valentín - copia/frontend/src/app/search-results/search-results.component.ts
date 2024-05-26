import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service'; // Adjust the import path as needed
import { Movie } from '../movie.model'; // Adjust the import path as needed

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];
      if (this.searchQuery) {
        this.searchMovies();
      }
    });
  }

  searchMovies(): void {
    this.movieService.searchMovies(this.searchQuery).subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error searching movies:', error); // Handle error
      }
    );
  }
}
