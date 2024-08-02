import express from 'express';
import connectDB from './config/db.js';
import dataRoutes from './routes/movieDataRoutes.js';
import authRoutes from './routes/authRoutes.js';
import movieRoute from './routes/dataRoutes.js';
import errorHandler from './utils/errorHandler.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', dataRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/data', movieRoute);


// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
