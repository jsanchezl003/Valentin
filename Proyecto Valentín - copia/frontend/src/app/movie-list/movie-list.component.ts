import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  message: string | null = null;
  selectedMovie: Movie | null = null;
  isModalVisible = false;
  filteredMovies: Movie[] = [];
  searchQuery: string = '';
  constructor(public dialog: MatDialog, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  
  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching movies:', error); // Handle error
      }
    );
  }

  searchMovies(): void {
    if (this.searchQuery) {
      this.movieService.searchMovies(this.searchQuery).subscribe(
        (data: Movie[]) => {
          // Limit the number of results to the first three
          this.filteredMovies = data.slice(0, 3);
        },
        (error) => {
          console.error('Error searching movies:', error);
        }
      );
    } else {
      // Clear the filteredMovies array when search query is empty
      this.filteredMovies = [];
    }
  }
  

  addToQueue(movie: Movie): void {
    this.movieService.addToQueue(movie).subscribe(
      (response) => {
        if (response && response.message) {
          console.log(response.message); // Log the message from the server
          this.message = response.message; // Show message to user
          // Assuming you want to refresh the movie list after adding to the queue
          this.loadMovies();
        } else {
          console.error('Invalid response format: Message is missing'); // Handle invalid response
        }
      },
      (error) => {
        if (error.error && error.error.message === 'Movie already in queue') {
          console.error('This movie is already in the queue.');
          this.message = 'This movie is already in the queue.';
        } else {
          console.error('An error occurred while adding the movie to the queue:', error.message); // Log any other errors
          this.message = 'An error occurred while adding the movie to the queue.';
        }
      }
    );
  }  

  openDialog(movie: Movie): void {
    const dialogRef = this.dialog.open(ModalContentComponent, {
      width: '1900px',
      data: movie,
      panelClass: 'center-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Optionally handle the result here
    });
  }
}
