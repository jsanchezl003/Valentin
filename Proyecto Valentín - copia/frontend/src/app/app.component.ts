import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message!: string;
  showQueue = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

  toggleQueue() {
    this.showQueue = !this.showQueue;
  }
}
