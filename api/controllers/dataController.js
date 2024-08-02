import Data from '../models/MovieData.js';

export const getMovies = async (req, res) => {
  const { page = 1, limit = 15, search = '', type = '' } = req.query;
  const filters = { title: new RegExp(search, 'i') };
  if (type) filters.type = type;
  if (req.user.age < 18) filters.rating = { $ne: 'R' };

  try {
    const movies = await Data.find(filters)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .exec();
    res.json(movies);
  } catch (err) {
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
