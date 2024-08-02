import express from 'express';
import { authenticateToken } from '../config/auth.js';
import { getMovies, getMovieById } from '../controllers/dataController.js';

const router = express.Router();

router.get('/movies', authenticateToken, getMovies);
router.get('/movies/:id', authenticateToken, getMovieById);

export default router;
