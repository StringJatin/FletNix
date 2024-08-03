import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){}

  productList : any;
  selectedCategory: string = 'Movie';
  token : string | null = "";
  page : number = 1;

  ngOnInit(){

    this.token = localStorage.getItem("token");

    this.getMovieList()
  }

  getMovieList = async()=>{
        try{
          let result = axios.get('https://flet-nix-backend.vercel.app/api/data/movies'+`?Page=${this.page}`,{
            headers :{
              "Authorization" : "Bearer " + this.token
            }
          });

          console.log(result);
        }
        catch(err){
          console.log("Error Fetching Moveis",err);
        }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }
}
