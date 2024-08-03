import Data from '../models/MovieData.js';

export const getMovies = async (req, res) => {
  // Extract query parameters with default values
  const { page = 1, limit = 15, search = '', type = '' } = req.query;

  // Initialize the filters object
  const filters = {};

  // If a search term is provided
  if (search) {
    // Create a regular expression for case-insensitive search
    const searchRegex = new RegExp(search, 'i');

    // Apply search filters
    filters.$or = [
      { title: searchRegex },  // Match movies with a title that contains the search term
      { cast: searchRegex }    // Match movies where the cast contains the search term
    ];
  }
  
  // If a type is provided (e.g., "Movie" or "TV Show"), add it to the filters
  if (type) filters.type = type;

  // If the user is under 18, filter out movies with an "R" rating
  if (req.user.age < 18) filters.rating = { $ne: 'R' };

  try {
    // Query the database with the filters, pagination, and limit
    const movies = await Data.find(filters)
      .skip((page - 1) * limit)  // Skip records based on the page number
      .limit(parseInt(limit))     // Limit the number of records per page
      .exec();                   // Execute the query

    // Send the movies data as JSON response
    res.json(movies);
  } catch (err) {
    // Handle any errors that occur during the query
    res.status(500).json({ message: err.message });
  }
};


export const getMovieById = async (req, res) => {
  try {
    const movie = await Data.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
