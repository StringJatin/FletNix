import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  movie: any = null;
  token: string | null = "";
  selectedTab: string = 'youMayAlsoLike';

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.token = localStorage.getItem("token");
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      try {
        const response = await axios.get(`https://flet-nix-backend.vercel.app/api/data/movies/${movieId}`, {
          headers: {
            "Authorization": "Bearer " + this.token
          }
        });

        this.movie = response.data;
      } catch (err) {
        console.error("Error fetching movie details", err);
      }
    }
  }
  setSelectedTab(tab: string): void {
    this.selectedTab = tab;
  }
}
