// movie-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  title: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title') || '';
      this.getMovieDetails();
    });
  }

  getMovieDetails(): void {
    this.movieService.searchMovies(this.title).subscribe(
      (data: Movie[]) => {
        if (data.length > 0) {
          this.movie = data[0]; // Assuming the first result is the desired movie
        } else {
          // Handle case when movie is not found
          console.error('Movie not found');
        }
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
}
