import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { ProductOfferComponent } from './components/product-offer/product-offer.component';
import { ProductUpdatesComponent } from './components/product-updates/product-updates.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RatingComponent } from './components/rating/rating.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ProductOfferComponent,
    ProductUpdatesComponent,
    FeedbackComponent,
    RatingComponent,
    NavbarComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
