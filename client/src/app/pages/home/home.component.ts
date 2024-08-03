import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productList: any[] = [];
  selectedCategory: string = 'Movie';
  token: string | null = "";
  page: number = 1;

  // Array of image URLs
  imageUrls: string[] = [
    "https://cdn.usegalileo.ai/sdxl10/06b6c52a-e396-4d95-b2db-a5dc02b58334.png",
    "https://cdn.usegalileo.ai/sdxl10/b0284f49-8cec-4190-ab3b-c5cc49063775.png",
    "https://cdn.usegalileo.ai/sdxl10/e1add611-7799-425d-905f-34fe37a3970b.png",
    "https://cdn.usegalileo.ai/sdxl10/e4c438a9-2647-4d19-94fe-e818e1b7986c.png",
    "https://cdn.usegalileo.ai/sdxl10/a5edb5ef-afe0-4fad-b4d9-644e10785293.png",
    "https://cdn.usegalileo.ai/sdxl10/73991be6-aa79-4312-997b-ba19ca18e205.png",
    "https://cdn.usegalileo.ai/sdxl10/19c80903-289c-49f9-b91c-77de668e8ea0.png",
    "https://cdn.usegalileo.ai/sdxl10/f4adaa35-487e-4340-adaf-ce32e7268d5f.png",
    "https://cdn.usegalileo.ai/sdxl10/a9715646-4a5b-4421-b08e-76fe9626161b.png",
    "https://cdn.usegalileo.ai/sdxl10/05f79354-e765-449e-91bf-0e4d034cb6d4.png"
  ];

  ngOnInit() {
    this.token = localStorage.getItem("token");
    this.getMovieList();
  }

  getMovieList = async () => {
    try {
      let result = await axios.get('https://flet-nix-backend.vercel.app/api/data/movies' + `?Page=${this.page}`, {
        headers: {
          "Authorization": "Bearer " + this.token
        }
      });

      // Assign random images to the movies
      this.productList = result.data.map((movie: any) => ({
        ...movie,
        imageUrl: this.getRandomImageUrl()
      }));
    } catch (err) {
      console.log("Error Fetching Movies", err);
    }
  }

  getRandomImageUrl(): string {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    return this.imageUrls[randomIndex];
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }
}
