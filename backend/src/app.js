import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middlewares
app.use(helmet()); // Security headers
app.use(cors());   // Frontend ko allow karne ke liye
app.use(morgan('dev')); // Logging ke liye
app.use(express.json()); // JSON data parse karne ke liye

// Health Check Route (Test karne ke liye)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running!' });
});

export default app;