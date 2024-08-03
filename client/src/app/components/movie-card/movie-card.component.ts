import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() movieClick = new EventEmitter<string>();

  onClick() {
    if (this.movie && this.movie._id) {
      this.movieClick.emit(this.movie._id);
    }
  }
}
