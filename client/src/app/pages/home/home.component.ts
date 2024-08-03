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
  type : string = "";

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
    this.getMovieList(this.page,"");
  }

  getMovieList = async (page: number, type : string) => {
    try {
      const result = await axios.get(`https://flet-nix-backend.vercel.app/api/data/movies?page=${page}&type=${type}`, {
        headers: {
          "Authorization": "Bearer " + this.token
        }
      });

      // Log the response to verify the data structure
      console.log("Movies Data:", result.data);

      // Assign random images to the movies
      this.productList = result.data.map((movie: any) => ({
        ...movie,
        imageUrl: this.getRandomImageUrl()
      }));
    } catch (err) {
      console.error("Error Fetching Movies", err);
    }
  }

  getRandomImageUrl(): string {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    return this.imageUrls[randomIndex];
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.page = 1; // Reset to first page on category change
    this.getMovieList(this.page,this.type); // Refresh movie list based on category change
  }

  changePage(newPage: number) {
    if (newPage >= 1) {
      this.page = newPage;
      this.getMovieList(this.page,this.type);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getPageNumbers(): number[] {
    // Simple pagination logic - display a few page numbers around the current page
    const pageNumbers: number[] = [];
    for (let i = Math.max(1, this.page - 2); i <= this.page + 2; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

 handleNavtabClick(tab : string){
    if(tab === "all"){
      this.type= "";
    }
    else if(tab === "Movie"){
      this.type = "Movie";
    }
    else {
      this.type = "TV Show";
    }
    this.page = 1;
    this.getMovieList(this.page,this.type);
 }
}
