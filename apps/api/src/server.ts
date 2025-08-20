/**
 * TRUE ME API Server
 * Express.js server with TypeScript
 */

import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error';
import { supabase } from './config/supabase';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://true-me-marketplace.vercel.app', 'https://www.trueme.ae']
    : ['http://localhost:3002', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check with database connectivity
app.get('/health', async (req, res) => {
  try {
    // Test database connection
    const { error } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    const dbStatus = error ? 'DISCONNECTED' : 'CONNECTED';
    
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      service: 'TRUE ME API',
      version: '1.0.0',
      database: dbStatus,
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    res.status(503).json({
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      service: 'TRUE ME API',
      database: 'DISCONNECTED',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// API Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'TRUE ME API is running',
    version: '1.0.0',
    endpoints: [
      'GET /health - Health check',
      'GET /api/users - Users management',
      'GET /api/articles - Articles management',
      'GET /api/brands - Brand status management'
    ]
  });
});

// Users API endpoints (placeholder)
app.get('/api/users', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('createdAt', { ascending: false })
      .limit(10);

    if (error) throw error;

    res.json({ 
      success: true, 
      data: data || [],
      count: data?.length || 0
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

// Articles API endpoints (placeholder)
app.get('/api/articles', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('createdAt', { ascending: false })
      .limit(10);

    if (error) throw error;

    res.json({ 
      success: true, 
      data: data || [],
      count: data?.length || 0
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

// Error handling
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`🚀 TRUE ME API server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});  
