import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queue: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getQueue().subscribe(data => {
      this.queue = data;
    });
  }

  removeFromQueue(movie: any): void {
    this.movieService.removeFromQueue(movie).subscribe(response => {
      console.log(response.message); // Show a success message or handle the response
      this.queue = this.queue.filter(m => m.title !== movie.title); // Update local queue
    }, error => {
      console.error(error.message); // Show an error message if something goes wrong
    });
  }
}
