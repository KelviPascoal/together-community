import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { envConfig } from './config/env';
import { errorHandler } from './shared/middleware/error-handler';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes placeholder
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Together API - Conectando pessoas por interesses comuns',
    version: '1.0.0'
  });
});

// Error handling
app.use(errorHandler);

const PORT = envConfig.port;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🌍 Ambiente: ${envConfig.nodeEnv}`);
});
