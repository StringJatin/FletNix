# FletNix

**FletNix** is an Angular-based web application designed for exploring and viewing a wide range of movies and TV shows. The application includes features such as user authentication, a search bar with debouncing, and filtering options.

## Features

- **User Authentication**: Users can log in or register. Authentication is managed using JWT tokens.
- **Movie and TV Show Browsing**: Users can view a list of movies and TV shows. Clicking on a movie will provide a detailed description.
- **Search Functionality**: Search movies by title and cast with debouncing to improve performance.
- **Filtering**: Filter movies by type (TV shows or movies).
- **Age-based Restrictions**: Users below the age of 18 cannot view R-rated movies.


## Installation Guide

To set up and run the FletNix project on your local machine, follow these steps:

1. **Clone the Repository**

   First, clone the repository to your local machine using Git:
   ```bash
   git clone https://github.com/StringJatin/FletNix.git


1. **Navigate to the Project Directory**

  Change your working directory to the cloned project folder:
  cd FletNix
   Install Dependencies

3. **Ensure you have Node.js and npm installed on your system**

  npm install
Run the Application


4. **Start the Angular development server to run the application**
ng serve
By default, the application will be served at http://localhost:4200. Open this URL in your web browser to view the application.
