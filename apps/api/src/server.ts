/**
 * TRUE ME API Server
 * Simple Express.js server with TypeScript
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'TRUE ME API is running',
    timestamp: new Date().toISOString()
  });
});

// Basic API route
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Welcome to TRUE ME API',
    version: '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TRUE ME API running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/health`);
});
